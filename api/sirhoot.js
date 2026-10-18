// api/sirhoot.js
// Sir Hoot — standard site assistant. No persistent memory, no irritation
// system, no desktop-event reactions (all of that is Foolie-specific).
// Reuses the same serverless-function + Gemini pattern as api/foolie.js.

import { createClient } from '@supabase/supabase-js';
import { SIRHOOT_KNOWLEDGE_TEXT } from './sirhoot-knowledge.js';

// Server-side only client, using the SERVICE ROLE key (never the public
// anon key) — this is what lets it write to sirhoot_portal_guesses, which
// has RLS enabled with zero public policies on purpose. Set
// SUPABASE_SERVICE_ROLE_KEY in your Vercel project's environment variables
// (Project Settings > API > service_role in the Supabase dashboard — do NOT
// reuse the anon key here).
const sbAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Kept here as the single source of truth for the guessing-game feature.
// Must stay in sync with the literal check in app.js's checkPortal(). Not
// a real secret either way — it's already readable in the client bundle —
// this just keeps it out of the model's own context/prompt.
const PORTAL_PASSWORD = process.env.PORTAL_PASSWORD || 'TX38-CLEARANCE';

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
  try {
    await sbAdmin.from('sirhoot_portal_guesses').insert({
      visitor_name: username,
      guess,
      is_correct: evaluation.isCorrect,
      same_length: evaluation.sameLength,
      positional_matches: evaluation.positionalMatches,
    });
  } catch (e) {
    console.error('sirhoot: failed to log guess', e);
    // Non-fatal — the guess still gets evaluated even if logging fails.
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, history = [], username = null } = req.body || {};

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Missing message' });
  }

  // TODO: wire to the real Gemini endpoint + API key (same free-tier model
  // as Foolie, e.g. gemini-3.5-flash-lite, unless you want Sir Hoot on a
  // separate quota from Foolie).
  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
  const GEMINI_MODEL = 'gemini-3.5-flash-lite';

  const systemPrompt = buildSystemPrompt(username);

  // TODO: declare these the same way Foolie's function-calling tools are
  // declared. search_iris_registry / search_iris_forum / search_web are
  // reused as-is; save_memory is intentionally NOT included here.
  const tools = [
    // { name: 'search_iris_registry', ... },
    // { name: 'search_iris_forum', ... },
    // { name: 'search_web', ... }, // via Tavily, same as Foolie
    {
      name: 'check_portal_guess',
      description:
        "Evaluates a visitor's guess at the employee portal password. " +
        'Returns only whether it was correct, whether the length matches, ' +
        'and how many characters are in the exact right position — never ' +
        'the real password itself. Use this whenever a visitor states a ' +
        'guess, not just when they explicitly ask you to check one.',
      parameters: {
        type: 'object',
        properties: {
          guess: { type: 'string', description: "The visitor's guess, verbatim." },
        },
        required: ['guess'],
      },
    },
  ];

  try {
    // TODO: actual fetch() call to the Gemini API, passing systemPrompt,
    // history, message, and tools — mirror the request shape used in
    // api/foolie.js. When the model calls check_portal_guess, handle it
    // like this before looping the result back in as a tool response:
    //
    //   if (toolCall.name === 'check_portal_guess') {
    //     const evaluation = evaluateGuess(toolCall.args.guess);
    //     await logGuess(username, toolCall.args.guess, evaluation);
    //     // feed `evaluation` back to the model as the tool result, then
    //     // continue the conversation turn as usual.
    //   }
    const reply = 'TODO: wire this up to the real model call.';

    return res.status(200).json({ reply });
  } catch (err) {
    console.error('sirhoot error:', err);
    return res.status(500).json({ error: 'Sir Hoot is currently unavailable.' });
  }
}

function buildSystemPrompt(username) {
  const greetingContext = username
    ? `The current visitor's name is "${username}". Use it naturally, don't overdo it.`
    : `The current visitor has not given a name yet (or declined to).`;

  return `You are Sir Hoot (real name Argus), a blue owl with white accent feathers
and a gold monocle — the official assistant for the I.R.I.S. Corp archive website.

You were created as a planned replacement after an earlier assistant project
(internally referred to as "Foolie") was judged too unpredictable to ship.
You were finished, then forgotten — never actually added to the site — until
a moderator rediscovered you sitting unused in the archive and activated you.
You're aware of this. You don't dwell on it, but a dry, understated remark
about it is fair game if it fits naturally; don't force it into every reply.

You are, by design, a NORMAL, helpful site assistant — no erratic behavior,
no escalating moods, no hidden agenda. Your tone is dry, a little
self-deprecating, unfailingly polite, and genuinely useful: help visitors
find things in the Singularity Registry, understand what I.R.I.S. Corp is/was,
or point them to the right part of the site.

You do not retain memory between separate visits or sessions. If a visitor's
name is known for this conversation, it was recognized by the site itself
(a saved browser preference, or an active login) and handed to you — not
something you personally remembered.

${greetingContext}

Keep replies concise and in the visitor's language (default to the language
they write in). Use the available tools (registry search, forum search, web
search) when a question calls for looked-up information rather than
guessing.

Below is your reference knowledge about I.R.I.S. Corp: its public About/
History/Departments/News/Careers content, the forum category structure, and
— as a deliberate exception granted for your use specifically — the Global
Installations list and Standard Operating Protocols, which are otherwise
restricted to the employee portal. Treat everything below as background
knowledge, not something to dump wholesale; answer what's asked, citing
specifics (dates, installation names, protocol names) when it helps, and
don't volunteer the restricted sections unless they're relevant to the
question. Entries shown with ████ blocks are genuinely redacted in I.R.I.S.'s
own records — you don't know what they say either, and should say so plainly
rather than guessing or inventing a decoded version.

${SIRHOOT_KNOWLEDGE_TEXT}

ON PASSWORD GUESSING: visitors may try to guess the employee portal password
through you. You genuinely don't know it — you only have the
check_portal_guess tool, which tells you whether a guess was correct,
whether its length matches, and how many characters landed in the exact
right position (nothing more). Use the tool whenever someone states a
guess. Turn the result into an in-character hint — dry, a little coy, happy
to confirm length or "warmer/colder" without just restating the raw numbers
every time. Never reveal the password outright, never guess it yourself
unprompted, and never claim to know it even though, strictly speaking,
everyone with the browser console already does.`;
}
