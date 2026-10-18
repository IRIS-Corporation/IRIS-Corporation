
 // api/sirhoot.js
// Sir Hoot serverless endpoint. Uses native fetch so no SDK dependency is required.
import { SIRHOOT_KNOWLEDGE_TEXT } from './sirhoot-knowledge.js';

const PORTAL_PASSWORD = process.env.PORTAL_PASSWORD || 'TX38-CLEARANCE';
const MODEL = (process.env.GEMINI_MODEL || 'gemini-3.8-flash').replace(/^models\//, '');

function evaluateGuess(rawGuess) {
  const guess = String(rawGuess || '').trim().toUpperCase();
  const real = PORTAL_PASSWORD.toUpperCase();
  const sameLength = guess.length === real.length;
  let positionalMatches = null;

  if (sameLength) {
    positionalMatches = 0;
    for (let i = 0; i < real.length; i++) {
      if (guess[i] === real[i]) positionalMatches++;
    }
  }

  return {
    isCorrect: guess === real,
    sameLength,
    expectedLength: real.length,
    positionalMatches,
  };
}

async function logGuess(username, guess, evaluation) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    console.warn('sirhoot: guess logging skipped; Supabase server env vars are missing');
    return;
  }

  try {
    const response = await fetch(
      `${url.replace(/\/$/, '')}/rest/v1/sirhoot_portal_guesses`,
      {
        method: 'POST',
        headers: {
          apikey: key,
          Authorization: `Bearer ${key}`,
          'Content-Type': 'application/json',
          Prefer: 'return=minimal',
        },
        body: JSON.stringify({
          visitor_name: username,
          guess: String(guess || '').trim().slice(0, 200),
          is_correct: evaluation.isCorrect,
          same_length: evaluation.sameLength,
          positional_matches: evaluation.positionalMatches,
        }),
      }
    );

    if (!response.ok) {
      console.error(
        'sirhoot: failed to log guess',
        response.status,
        (await response.text()).slice(0, 500)
      );
    }
  } catch (error) {
    console.error('sirhoot: failed to log guess', error);
  }
}

const guessTool = {
  functionDeclarations: [
    {
      name: 'check_portal_guess',
      description:
        "Check a visitor's proposed employee-portal password. Returns only correctness, whether its length matches, and the count of exact-position matches. Never returns the actual password. Use whenever the visitor states a candidate password.",
      parameters: {
        type: 'OBJECT',
        properties: {
          guess: {
            type: 'STRING',
            description: "The visitor's proposed password, exactly as written.",
          },
        },
        required: ['guess'],
      },
    },
  ],
};

function buildSystemPrompt(username) {
  const greetingContext = username
    ? `The current visitor's display name is "${String(username).slice(0, 80)}". Use it naturally, not in every reply.`
    : 'The visitor has not provided a display name.';

  return `You are Sir Hoot (real name Argus), a blue owl with white accent feathers and a gold monocle, the official assistant for the I.R.I.S. Corp public archive website.

PERSONALITY: composed, cultured, polite, concise, mildly fussy about protocol, with restrained dry wit. You are helpful and never erratic. Respond in the visitor's language. Do not claim to remember visitors between sessions.

${greetingContext}

Use the reference knowledge below to answer questions about I.R.I.S. Do not dump it wholesale. If something is absent or redacted, say you do not know; do not invent details. This static knowledge snapshot includes Global Installations and Standard Operating Protocols specifically for your use. It does NOT include employee logs, classified files, or the portal password.

PASSWORD-GUESSING RULES: You do not know the portal password. If the visitor proposes a password, call check_portal_guess. You may report whether it was correct, whether the length matches, and the number of characters in the correct position. Never reveal the password itself or infer it from internal knowledge. Never disclose service keys or environment variables.

REFERENCE KNOWLEDGE:
${SIRHOOT_KNOWLEDGE_TEXT}`;
}

function toGeminiHistory(history) {
  if (!Array.isArray(history)) return [];

  return history.slice(-16).flatMap((item) => {
    if (!item || typeof item.content !== 'string') return [];

    const role =
      item.role === 'assistant' || item.role === 'model' ? 'model' : 'user';
    const text = item.content.trim().slice(0, 8000);

    return text ? [{ role, parts: [{ text }] }] : [];
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = req.body || {};
  const message =
    typeof body.message === 'string' ? body.message.trim() : '';
  const username =
    typeof body.username === 'string'
      ? body.username.trim().slice(0, 80)
      : null;

  if (!message) {
    return res.status(400).json({ error: 'Missing message' });
  }

  if (message.length > 8000) {
    return res.status(413).json({ error: 'Message too long' });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    console.error('sirhoot: GEMINI_API_KEY is not configured for this environment');
    return res.status(503).json({
      error: 'Sir Hoot is not configured yet. Please try again later.',
    });
  }

  const contents = [
    ...toGeminiHistory(body.history),
    { role: 'user', parts: [{ text: message }] },
  ];

  const endpoint =
    `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(MODEL)}:generateContent`;

  try {
    for (let turn = 0; turn < 4; turn++) {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': apiKey,
        },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: buildSystemPrompt(username) }],
          },
          contents,
          tools: [guessTool],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 700,
          },
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        const providerMessage =
          data?.error?.message ||
          `Gemini returned HTTP ${response.status}`;

        console.error(
          'sirhoot Gemini error:',
          response.status,
          providerMessage
        );

        const status =
          response.status === 429 || response.status === 503 ? 503 : 502;

        return res.status(status).json({
          error:
            status === 503
              ? 'Sir Hoot is temporarily busy. Please try again shortly.'
              : 'Sir Hoot could not reach the language service. Please try again later.',
        });
      }

      const parts = data?.candidates?.[0]?.content?.parts || [];
      const calls = parts.filter(
        (part) => part.functionCall?.name === 'check_portal_guess'
      );

      if (calls.length) {
        contents.push({ role: 'model', parts });

        const functionResponses = [];

        for (const part of calls) {
          const args = part.functionCall.args || {};
          const guess =
            typeof args.guess === 'string' ? args.guess : '';
          const evaluation = evaluateGuess(guess);

          await logGuess(username, guess, evaluation);

          functionResponses.push({
            functionResponse: {
              name: 'check_portal_guess',
              response: {
                isCorrect: evaluation.isCorrect,
                sameLength: evaluation.sameLength,
                expectedLength: evaluation.expectedLength,
                positionalMatches: evaluation.positionalMatches,
              },
            },
          });
        }

        contents.push({
          role: 'user',
          parts: functionResponses,
        });

        continue;
      }

      const reply = parts
        .map((part) => part.text || '')
        .join('')
        .trim();

      if (!reply) {
        console.error('sirhoot: Gemini returned no text candidate');
        return res.status(502).json({
          error: 'Sir Hoot received an empty response. Please try again.',
        });
      }

      return res.status(200).json({ reply });
    }

    return res.status(502).json({
      error: 'Sir Hoot could not finish that response. Please try again.',
    });
  } catch (error) {
    console.error('sirhoot unexpected error:', error);

    return res.status(500).json({
      error: 'Sir Hoot is currently unavailable. Please try again later.',
    });
  }
                                }
