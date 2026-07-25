// ===== LOGO =====
// Replace LOGO_PLACEHOLDER with actual logo base64 when available


// ===== ARCHIVE VERSION =====
// Update this string manually on each deploy: format [YY].[M].[D]
(function() {
  const version = 'v26.7.25';
  const el1 = document.getElementById('archive-version');
  const el2 = document.getElementById('emp-archive-version');
  if (el1) el1.textContent = version;
  if (el2) el2.textContent = version;
})();

// ===== LANGUAGE =====
// ===== PUBLIC NAVIGATION =====
// Days since last major incident counter
(function() {
  const incident = new Date('2026-01-12');
  const today = new Date();
  const days = Math.floor((today - incident) / (1000 * 60 * 60 * 24));
  const el = document.getElementById('days-counter');
  if (el) el.textContent = days;
})();

function toggleTypePopup(el) {
  const isOpen = el.classList.contains('open');
  document.querySelectorAll('.sing-type-wrap.open').forEach(w => w.classList.remove('open'));
  if (!isOpen) {
    el.classList.add('open');
  }
}

// Close popups when clicking outside — using capture:false so nav clicks aren't blocked
document.addEventListener('click', function(e) {
  if (!e.target.closest || !e.target.closest('.sing-type-wrap')) {
    document.querySelectorAll('.sing-type-wrap.open').forEach(w => w.classList.remove('open'));
  }
}, false);

function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  document.getElementById('nav-' + id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== CAREERS FORM =====
function submitCareers() {
  const code = document.getElementById('f-code').value.trim().toUpperCase();
  const email = document.getElementById('f-email').value.trim();
  const name = document.getElementById('f-name').value.trim();
  const age = parseInt(document.getElementById('f-age').value.trim());
  const dept = document.getElementById('f-dept').value;
  const how = document.getElementById('f-how').value.trim();

  const out = document.getElementById('form-success');
  out.style.display = 'block';
  out.style.color = '#cc4444';
  out.style.borderColor = '#4a1a1a';

  // Field validation
  let errors = [];
  if (!name) errors.push('&gt; ERROR — NAME INCOMPLETE');
  if (!age) errors.push('&gt; ERROR — AGE MISSING');
  if (!email || !email.includes('@')) errors.push('&gt; ERROR — EMAIL INVALID OR INCOMPLETE');
  if (!dept || dept.includes('Select')) errors.push('&gt; ERROR — AREA OF EXPERTISE NOT SELECTED');
  if (!how) errors.push('&gt; ERROR — FIELD "HOW DID YOU HEAR ABOUT US" INCOMPLETE');

  if (errors.length > 0) {
    out.innerHTML = errors.join('<br>');
    return;
  }

  // Age check
  if (age < 16) {
    out.innerHTML = '&gt; APPLICATION RECEIVED.<br>&gt; PROCESSING...<br>&gt; VALIDATING FIELDS...<br>&gt; ...<br>&gt; APPLICATION REJECTED.<br>&gt; Applicants must be at least 16 years of age to submit a candidacy to I.R.I.S. Corp.<br>&gt; This application has not been stored.';
    return;
  }

  if (age < 18) {
    out.style.color = '#8a7a3a';
    out.style.borderColor = '#4a3a1a';
    out.innerHTML = '&gt; APPLICATION RECEIVED.<br>&gt; PROCESSING...<br>&gt; VALIDATING FIELDS...<br>&gt; ...<br>&gt; NOTICE: APPLICANT UNDER MINIMUM ACTIVE AGE.<br>&gt; I.R.I.S. Corp requires a minimum age of 18 for active candidacy.<br>&gt; Your application has been stored in our pending registry.<br>&gt; It will be reviewed automatically upon your 18th birthday.<br>&gt; No further action is required on your part.';
    return;
  }

  // All fields valid — show processing then error
  out.style.color = '#6a8a6a';
  out.style.borderColor = '#2a4a2a';

  if (code === 'TX38-CLEARANCE') {
    out.innerHTML = '&gt; APPLICATION RECEIVED.<br>&gt; PROCESSING...<br>&gt; VALIDATING FIELDS...<br>&gt; ...<br>&gt; ERROR: SUBMISSION PORTAL UNAVAILABLE.<br>&gt; This form is no longer connected to our primary servers due to the ongoing institutional transition.<br>&gt; Your access code has been logged. We will be in contact if your application is approved.<br>&gt; We apologize for the inconvenience.';
    unlockPortal();
  } else {
    out.style.color = '#6a7a6a';
    out.innerHTML = '&gt; APPLICATION RECEIVED.<br>&gt; PROCESSING...<br>&gt; VALIDATING FIELDS...<br>&gt; ...<br>&gt; ERROR: SUBMISSION PORTAL UNAVAILABLE.<br>&gt; This form is no longer connected to our primary servers due to the ongoing institutional transition.<br>&gt; Please try again later or check the Forums for updates.';
  }
}


// ===== PORTAL =====
function showPortal() {
  document.getElementById('portalOverlay').classList.add('visible');
  document.getElementById('portalInput').focus();
}

function hidePortal() {
  document.getElementById('portalOverlay').classList.remove('visible');
  document.getElementById('portalInput').value = '';
  document.getElementById('portalError').style.display = 'none';
}

function unlockPortal() {
  const btn = document.getElementById('portalBtn');
  btn.disabled = false;
  btn.style.opacity = '1';
  btn.style.cursor = 'pointer';
  btn.textContent = '🔓 EMPLOYEE PORTAL';
  btn.setAttribute('data-en', '🔓 EMPLOYEE PORTAL');
  btn.setAttribute('data-es', '🔓 PORTAL DE EMPLEADOS');
  sessionStorage.setItem('portalUnlocked', 'true');

  // Brief red gradient sweep to draw attention to the newly unlocked button
  btn.classList.add('portal-btn-flash');
  setTimeout(() => btn.classList.remove('portal-btn-flash'), 1450);
}

function enterEmployeeLayer() {
  document.getElementById('publicLayer').style.display = 'none';
  document.getElementById('employeeLayer').classList.add('visible');
  window.scrollTo(0, 0);

  if (sessionStorage.getItem('portalIntroSeen') === 'true') {
    // Already seen this session — explicitly force the overlay hidden rather
    // than assuming it already carries the "done" class, since a page reload
    // resets the DOM to its static state (no JS-added classes survive that),
    // even though sessionStorage itself persists across reloads.
    document.getElementById('empIntroOverlay').classList.add('emp-intro-done');
    document.getElementById('empHeaderSeal').classList.add('emp-header-seal-visible');
    return;
  }

  sessionStorage.setItem('portalIntroSeen', 'true');
  const overlay = document.getElementById('empIntroOverlay');
  overlay.classList.add('emp-intro-playing');

  // Total sequence duration matches the 2.6s keyframe animations above.
  setTimeout(() => {
    overlay.classList.add('emp-intro-done');
    document.getElementById('empHeaderSeal').classList.add('emp-header-seal-visible');
  }, 2600);
}

function tryEnterPortal() {
  if (sessionStorage.getItem('portalUnlocked') === 'true') {
    enterEmployeeLayer();
  }
}

function checkPortal() {
  const code = document.getElementById('portalInput').value.trim().toUpperCase();
  if (code === 'TX38-CLEARANCE') {
    hidePortal();
    unlockPortal();
    enterEmployeeLayer();
  } else {
    document.getElementById('portalError').style.display = 'block';
    document.getElementById('portalInput').value = '';
    document.getElementById('portalInput').focus();
  }
}

function logout() {
  document.getElementById('employeeLayer').classList.remove('visible');
  const pub = document.getElementById('publicLayer');
  pub.style.display = 'flex';
  pub.style.flexDirection = 'column';
  pub.style.height = '100vh';
  pub.style.overflow = 'hidden';
  window.scrollTo(0, 0);
}

// ===== EMPLOYEE NAVIGATION =====
function showEmpSection(id) {
  document.querySelectorAll('.emp-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.emp-nav a').forEach(a => a.classList.remove('active'));
  document.getElementById('empsec-' + id).classList.add('active');
  document.getElementById('enav-' + id).classList.add('active');
  window.scrollTo(0, 0);
  if (id === 'logs') {
    initLogs();
  }
}

// ===== FORUM =====
let forumUser = null;
let currentForumCat = 'general';

function escapeForumText(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/\n/g, '<br>');
}

async function forumRegister() {
  const u = document.getElementById('forumUsername').value.trim();
  const p = document.getElementById('forumPassword').value.trim();
  const status = document.getElementById('forumStatus');
  if (!u || !p) { status.textContent = 'Fill all fields.'; return; }
  status.textContent = 'Creating account...';
  const { data, error } = await sb.auth.signUp({ email: u + '@iris-forum.local', password: p });
  if (error) { status.textContent = 'Error: ' + error.message; return; }
  await sb.from('profiles').insert({ username: u });
  forumUser = u;
  showForumUser();
  status.textContent = '';
  loadForumPosts();
}

async function forumLogin() {
  const u = document.getElementById('forumUsername').value.trim();
  const p = document.getElementById('forumPassword').value.trim();
  const status = document.getElementById('forumStatus');
  if (!u || !p) { status.textContent = 'Fill all fields.'; return; }
  status.textContent = 'Signing in...';
  const { data, error } = await sb.auth.signInWithPassword({ email: u + '@iris-forum.local', password: p });
  if (error) { status.textContent = 'Error: ' + error.message; return; }
  forumUser = u;
  showForumUser();
  status.textContent = '';
  loadForumPosts();
}

function forumLogout() {
  sb.auth.signOut();
  forumUser = null;
  document.getElementById('forumAuthBox').style.display = 'flex';
  document.getElementById('forumUserBox').style.display = 'none';
  document.getElementById('forumPostForm').classList.remove('visible');
}

function showForumUser() {
  document.getElementById('forumAuthBox').style.display = 'none';
  document.getElementById('forumUserBox').style.display = 'flex';
  document.getElementById('forumUserName').textContent = '⬤ ' + forumUser.toUpperCase();
  document.getElementById('forumPostForm').classList.add('visible');
}

function setForumCat(cat) {
  currentForumCat = cat;
  document.querySelectorAll('.forum-cat-item').forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
  loadForumPosts();
}

const FORUM_ADMINS = ['IRIS_Corporation', 'UnUsuarioDeInternet'];

function isAdmin(username) {
  return FORUM_ADMINS.some(a => a.toLowerCase() === (username||'').toLowerCase());
}

function formatAuthor(username) {
  if (isAdmin(username)) {
    return `<span style="color:#e8c840;background:var(--blue);padding:1px 6px;border-radius:2px;font-weight:700;">${username.toUpperCase()}</span>`;
  }
  return `<span style="color:#0d2240;background:#c8d8e8;padding:1px 6px;border-radius:2px;font-weight:600;">${username.toUpperCase()}</span>`;
}

async function loadForumPosts() {
  const container = document.getElementById('forumPosts');
  const view = document.getElementById('forumPostView');
  if (!container) return;
  container.style.display = 'block';
  view.style.display = 'none';
  container.innerHTML = '<div class="forum-empty">LOADING...</div>';
  const { data, error } = await sb.from('forum_posts')
    .select('*')
    .eq('category', currentForumCat)
    .order('created_at', { ascending: false });
  if (error || !data || data.length === 0) {
    container.innerHTML = '<div class="forum-empty">NO POSTS IN THIS CATEGORY YET.</div>';
    return;
  }
  const postIds = data.map(p => p.id);
  const { data: replies } = await sb.from('forum_replies')
    .select('*')
    .in('post_id', postIds)
    .order('created_at', { ascending: true });
  const repliesByPost = {};
  (replies || []).forEach(r => {
    if (!repliesByPost[r.post_id]) repliesByPost[r.post_id] = [];
    repliesByPost[r.post_id].push(r);
  });
  container.innerHTML = data.map(p => {
    const replyCount = (repliesByPost[p.id] || []).length;
    const rawPreview = p.content.length > 120 ? p.content.substring(0, 120) + '...' : p.content;
    const preview = escapeForumText(rawPreview);
    return `
    <div class="forum-post" id="post-${p.id}" onclick="openPostView(${p.id})" style="cursor:pointer;">
      <div class="forum-post-header">
        ${formatAuthor(p.username)}
        <span class="forum-post-date">${new Date(p.created_at).toLocaleDateString()}</span>
      </div>
      <div class="forum-post-content">${preview}</div>
      <div style="margin-top:6px;font-family:'Share Tech Mono',monospace;font-size:9px;color:#4a8aaa;letter-spacing:0.1em;">${replyCount} ${replyCount === 1 ? 'REPLY' : 'REPLIES'}</div>
    </div>`;
  }).join('');
}

async function openPostView(postId) {
  const container = document.getElementById('forumPosts');
  const view = document.getElementById('forumPostView');
  container.style.display = 'none';
  view.style.display = 'block';
  view.innerHTML = '<div class="forum-empty">LOADING...</div>';
  const { data: post } = await sb.from('forum_posts').select('*').eq('id', postId).single();
  const { data: replies } = await sb.from('forum_replies').select('*').eq('post_id', postId).order('created_at', { ascending: true });
  if (!post) { view.innerHTML = '<div class="forum-empty">POST NOT FOUND.</div>'; return; }
  const isOwn = forumUser && post.username.toLowerCase() === forumUser.toLowerCase();
  const canDelete = isOwn || (forumUser && isAdmin(forumUser));
  const actions = (isOwn || canDelete) ? `
    <div style="display:flex;gap:6px;margin-top:6px;">
      ${isOwn ? `<button onclick="event.stopPropagation();editForumPost(${post.id}, this)" style="font-family:'Share Tech Mono',monospace;font-size:8px;letter-spacing:0.1em;background:transparent;border:1px solid #2a4a6a;color:#4a8aaa;padding:2px 8px;cursor:pointer;">EDIT</button>` : ''}
      ${canDelete ? `<button onclick="event.stopPropagation();deleteForumPost(${post.id})" style="font-family:'Share Tech Mono',monospace;font-size:8px;letter-spacing:0.1em;background:transparent;border:1px solid #4a1a1a;color:#cc4444;padding:2px 8px;cursor:pointer;">DELETE</button>` : ''}
    </div>` : '';
  const repliesHTML = (replies || []).map(r => {
    const isOwnReply = forumUser && r.username.toLowerCase() === forumUser.toLowerCase();
    const canDeleteReply = isOwnReply || (forumUser && isAdmin(forumUser));
    return `
    <div style="margin-top:10px;padding:10px 12px;border-left:2px solid #2a4a6a;background:#0a1a2e;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
        ${formatAuthor(r.username)}
        <span class="forum-post-date">${new Date(r.created_at).toLocaleDateString()}</span>
      </div>
      <div style="font-size:11px;color:#a8c8e8;line-height:1.5;" id="reply-content-${r.id}">${escapeForumText(r.content)}</div>
      <div style="display:flex;gap:6px;margin-top:4px;">
        ${isOwnReply ? `<button onclick="editForumReply(${r.id}, ${postId}, this)" style="font-family:'Share Tech Mono',monospace;font-size:8px;letter-spacing:0.1em;background:transparent;border:1px solid #2a4a6a;color:#4a8aaa;padding:2px 8px;cursor:pointer;">EDIT</button>` : ''}
        ${canDeleteReply ? `<button onclick="deleteForumReply(${r.id}, ${postId})" style="font-family:'Share Tech Mono',monospace;font-size:8px;letter-spacing:0.1em;background:transparent;border:1px solid #4a1a1a;color:#cc4444;padding:2px 8px;cursor:pointer;">DELETE</button>` : ''}
      </div>
    </div>`;
  }).join('');
  const replyForm = forumUser ? `
    <div style="margin-top:12px;">
      <textarea id="reply-input-${post.id}" placeholder="Write a reply..." style="width:100%;font-family:'Share Tech Mono',monospace;font-size:11px;background:#0a1a2a;border:1px solid #2a4a6a;color:#a8c8e8;padding:8px;resize:vertical;min-height:60px;box-sizing:border-box;"></textarea>
      <button onclick="submitReply(${post.id})" style="font-family:'Share Tech Mono',monospace;font-size:8px;letter-spacing:0.1em;background:transparent;border:1px solid #2a4a6a;color:#4a8aaa;padding:2px 8px;cursor:pointer;margin-top:4px;">REPLY</button>
    </div>` : '';
  view.innerHTML = `
    <button onclick="loadForumPosts()" style="font-family:'Share Tech Mono',monospace;font-size:9px;letter-spacing:0.1em;background:transparent;border:1px solid #2a4a6a;color:#4a8aaa;padding:4px 10px;cursor:pointer;margin-bottom:12px;">← BACK</button>
    <div class="forum-post">
      <div class="forum-post-header">
        ${formatAuthor(post.username)}
        <span class="forum-post-date">${new Date(post.created_at).toLocaleDateString()}</span>
      </div>
      <div class="forum-post-content" id="post-content-${post.id}">${escapeForumText(post.content)}</div>
      ${actions}
    </div>
    <div style="margin-top:16px;font-family:'Share Tech Mono',monospace;font-size:9px;color:#4a8aaa;letter-spacing:0.1em;border-bottom:1px solid #1a3a5a;padding-bottom:6px;">${(replies||[]).length} ${(replies||[]).length === 1 ? 'REPLY' : 'REPLIES'}</div>
    ${repliesHTML}
    ${replyForm}`;
}

async function submitReply(postId) {
  const input = document.getElementById('reply-input-' + postId);
  const content = input.value.trim();
  if (!content || !forumUser) return;
  const { data: { session } } = await sb.auth.getSession();
  const uid = session ? session.user.id : null;
  const { error } = await sb.from('forum_replies').insert({ post_id: postId, username: forumUser, content, user_id: uid });
  if (error) { alert('Error: ' + error.message); return; }
  openPostView(postId);
}

async function deleteForumReply(id, postId) {
  if (!confirm('Delete this reply?')) return;
  const { error } = await sb.from('forum_replies').delete().eq('id', id);
  if (error) { alert('Error: ' + error.message); return; }
  openPostView(postId);
}

async function deleteForumPost(id) {
  if (!confirm('Delete this post?')) return;
  const { error } = await sb.from('forum_posts').delete().eq('id', id);
  if (error) { alert('Error: ' + error.message); return; }
  loadForumPosts();
}

async function editForumPost(id, btn) {
  const contentEl = document.getElementById('post-content-' + id);
  if (btn.textContent === 'EDIT') {
    // Recover original text: convert <br> back to \n, then strip remaining HTML
    const rawHTML = contentEl.innerHTML;
    const current = rawHTML.replace(/<br\s*\/?>/gi, '\n')
      .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"');
    contentEl.innerHTML = `<textarea style="width:100%;font-family:'Share Tech Mono',monospace;font-size:11px;background:#0a1a2a;border:1px solid #2a4a6a;color:#a8c8e8;padding:8px;resize:vertical;" id="edit-input-${id}">${current}</textarea>`;
    btn.textContent = 'SAVE';
  } else {
    const newContent = document.getElementById('edit-input-' + id).value.trim();
    if (!newContent) return;
    await sb.from('forum_posts').update({ content: newContent }).eq('id', id);
    btn.textContent = 'EDIT';
    loadForumPosts();
  }
}

async function editForumReply(id, postId, btn) {
  const contentEl = document.getElementById('reply-content-' + id);
  if (btn.textContent === 'EDIT') {
    const rawHTML = contentEl.innerHTML;
    const current = rawHTML.replace(/<br\s*\/?>/gi, '\n')
      .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"');
    contentEl.innerHTML = `<textarea style="width:100%;font-family:'Share Tech Mono',monospace;font-size:11px;background:#0a1a2a;border:1px solid #2a4a6a;color:#a8c8e8;padding:8px;resize:vertical;" id="edit-reply-input-${id}">${current}</textarea>`;
    btn.textContent = 'SAVE';
  } else {
    const newContent = document.getElementById('edit-reply-input-' + id).value.trim();
    if (!newContent) return;
    await sb.from('forum_replies').update({ content: newContent }).eq('id', id);
    openPostView(postId);
  }
}

async function submitForumPost() {
  const postContent = document.getElementById('forumPostContent').value.trim();
  if (!postContent || !forumUser) return;
  const { data: { session } } = await sb.auth.getSession();
  const uid = session ? session.user.id : null;
  await sb.from('forum_posts').insert({ username: forumUser, content: postContent, category: currentForumCat, user_id: uid });
  document.getElementById('forumPostContent').value = '';
  loadForumPosts();
}

// ===== LOGS NEW =====
let logUserNew = null;
let logsCurrentPage = 1;
const LOGS_PER_PAGE = 10;
let allUserLogs = [];

async function initLogs() {
  const logsApp = document.getElementById('logsApp');
  if (!logsApp) return;
  if (logUserNew) {
    document.getElementById('logsNotAuthNew').style.display = 'none';
    const authDiv = document.getElementById('logsAuthNew');
    authDiv.style.display = 'flex';
    document.getElementById('logsUserLabel').textContent = '⬤ ' + logUserNew.toUpperCase();
    loadLogsNew();
  } else {
    document.getElementById('logsNotAuthNew').style.display = 'flex';
    document.getElementById('logsAuthNew').style.display = 'none';
  }
}

async function logRegisterNew() {
  const u = document.getElementById('logUsernameNew').value.trim();
  const p = document.getElementById('logPasswordNew').value.trim();
  const status = document.getElementById('logAuthStatusNew');
  if (!u || !p) { status.textContent = '> ERROR — FILL ALL FIELDS'; return; }
  if (p.length < 6) { status.textContent = '> ERROR — PASSWORD MIN 6 CHARS'; return; }
  status.textContent = '> CREATING ACCOUNT...';
  const { error } = await sb.auth.signUp({ email: u + '@iris-logs.local', password: p });
  if (error) { status.textContent = '> ERROR: ' + error.message; return; }
  await sb.from('profiles').insert({ username: u });
  logUserNew = u;
  status.textContent = '';
  document.getElementById('logsNotAuthNew').style.display = 'none';
  const authDiv = document.getElementById('logsAuthNew');
  authDiv.style.display = 'flex';
  document.getElementById('logsUserLabel').textContent = '⬤ ' + u.toUpperCase();
  loadLogsNew();
}

async function logLoginNew() {
  const u = document.getElementById('logUsernameNew').value.trim();
  const p = document.getElementById('logPasswordNew').value.trim();
  const status = document.getElementById('logAuthStatusNew');
  if (!u || !p) { status.textContent = '> ERROR — FILL ALL FIELDS'; return; }
  status.textContent = '> AUTHENTICATING...';
  const { error } = await sb.auth.signInWithPassword({ email: u + '@iris-logs.local', password: p });
  if (error) { status.textContent = '> ERROR: ' + error.message; return; }
  logUserNew = u;
  status.textContent = '';
  document.getElementById('logsNotAuthNew').style.display = 'none';
  const authDiv = document.getElementById('logsAuthNew');
  authDiv.style.display = 'flex';
  document.getElementById('logsUserLabel').textContent = '⬤ ' + u.toUpperCase();
  loadLogsNew();
}

function logLogoutNew() {
  sb.auth.signOut();
  logUserNew = null;
  allUserLogs = [];
  document.getElementById('logsNotAuthNew').style.display = 'flex';
  document.getElementById('logsAuthNew').style.display = 'none';
}

async function loadLogsNew() {
  if (!logUserNew) return;
  const container = document.getElementById('logsContentNew');
  container.innerHTML = '<div class="logs-empty-state">LOADING...</div>';
  const { data, error } = await sb.from('employee_logs')
    .select('*')
    .or('username.eq.' + logUserNew + ',username.eq.RECV:' + logUserNew)
    .order('created_at', { ascending: false });
  if (error) { container.innerHTML = '<div class="logs-empty-state">ERROR LOADING ENTRIES</div>'; return; }
  allUserLogs = data || [];
  renderLogsPage();
}

function renderLogsPage() {
  const container = document.getElementById('logsContentNew');
  const start = (logsCurrentPage - 1) * LOGS_PER_PAGE;
  const pageLogs = allUserLogs.slice(start, start + LOGS_PER_PAGE);
  const totalPages = Math.max(1, Math.ceil(allUserLogs.length / LOGS_PER_PAGE));
  document.getElementById('logsPageIndicator').textContent = 'P.' + logsCurrentPage;
  if (allUserLogs.length === 0) {
    container.innerHTML = '<div class="logs-empty-state">— NO ENTRIES —<br><span style="font-size:9px;opacity:0.5;">Use + to create your first log</span></div>';
    return;
  }
  container.innerHTML = pageLogs.map(l => {
    const isReceived = l.username && l.username.startsWith('RECV:');
    const dateStr = new Date(l.created_at).toLocaleDateString();
    return `<div class="logs-entry-row" onclick='openLogsView(${JSON.stringify(l.title)}, ${JSON.stringify(dateStr)}, ${JSON.stringify(l.content)}, ${JSON.stringify(isReceived)})'>
      <div class="logs-entry-dot${isReceived ? ' received' : ''}"></div>
      <div class="logs-entry-info">
        <div class="logs-entry-title">${l.title}</div>
        <div class="logs-entry-meta">${isReceived ? 'RECEIVED' : 'PERSONAL'}</div>
      </div>
      <div class="logs-entry-date">${dateStr}</div>
    </div>`;
  }).join('');
}

function logsChangePage(dir) {
  const totalPages = Math.max(1, Math.ceil(allUserLogs.length / LOGS_PER_PAGE));
  logsCurrentPage = Math.max(1, Math.min(totalPages, logsCurrentPage + dir));
  renderLogsPage();
}

async function submitNewLog() {
  const title = document.getElementById('logNewTitle').value.trim();
  const logContent = document.getElementById('logNewContent').value.trim();
  const status = document.getElementById('logSaveStatusNew');
  if (!title) { status.style.color='#cc4444'; status.textContent = '> ERROR — TITLE REQUIRED'; return; }
  if (!logContent) { status.style.color='#cc4444'; status.textContent = '> ERROR — CONTENT REQUIRED'; return; }
  if (!logUserNew) { status.style.color='#cc4444'; status.textContent = '> ERROR — NOT AUTHENTICATED'; return; }
  const { error } = await sb.from('employee_logs').insert({ username: logUserNew, title, content: logContent });
  if (!error) {
    document.getElementById('logNewTitle').value = '';
    document.getElementById('logNewContent').value = '';
    status.style.color='#4a8a4a';
    status.textContent = '> ENTRY SAVED SUCCESSFULLY';
    setTimeout(() => { status.textContent = ''; hideLogsPanel('add'); }, 1500);
    loadLogsNew();
  } else {
    status.style.color='#cc4444';
    status.textContent = '> ERROR: ' + error.message;
  }
}

async function sendLog() {
  const to = document.getElementById('logSendTo').value.trim();
  const title = document.getElementById('logSendTitle').value.trim();
  const logContent = document.getElementById('logSendContent').value.trim();
  const status = document.getElementById('logSendStatus');
  if (!to || !title || !logContent) { status.style.color='#cc4444'; status.textContent = '> ERROR — FILL ALL FIELDS'; return; }
  if (!logUserNew) { status.style.color='#cc4444'; status.textContent = '> ERROR — NOT AUTHENTICATED'; return; }
  const { error } = await sb.from('employee_logs').insert({
    username: 'RECV:' + to,
    title: '[FROM: ' + logUserNew.toUpperCase() + '] ' + title,
    content: logContent
  });
  if (!error) {
    document.getElementById('logSendTo').value = '';
    document.getElementById('logSendTitle').value = '';
    document.getElementById('logSendContent').value = '';
    status.style.color='#4a8a4a';
    status.textContent = '> LOG SENT SUCCESSFULLY';
    setTimeout(() => { status.textContent = ''; hideLogsPanel('files'); }, 1500);
  } else {
    status.style.color='#cc4444';
    status.textContent = '> ERROR: ' + error.message;
  }
}

function showLogsPanel(name) {
  document.querySelectorAll('.logs-panel').forEach(p => p.classList.remove('visible'));
  document.querySelectorAll('.logs-sidebar-btn').forEach(b => b.classList.remove('active'));
  const panel = document.getElementById('logsPanel-' + name);
  const btn = document.getElementById('lsb-' + name);
  if (panel) panel.classList.add('visible');
  if (btn) btn.classList.add('active');
}

function hideLogsPanel(name) {
  const panel = document.getElementById('logsPanel-' + name);
  const btn = document.getElementById('lsb-' + name);
  if (panel) panel.classList.remove('visible');
  if (btn) btn.classList.remove('active');
}

function openLogsView(title, date, content, isReceived) {
  document.getElementById('logsViewTitle').textContent = title;
  document.getElementById('logsViewMeta').textContent = date + (isReceived ? ' — RECEIVED' : ' — PERSONAL LOG');
  document.getElementById('logsViewBody').textContent = content;
  document.getElementById('logsViewOverlay').classList.add('visible');
}

function closeLogsView() {
  document.getElementById('logsViewOverlay').classList.remove('visible');
}

function getLuminance(hex) {
  const r = parseInt(hex.slice(1,3),16) / 255;
  const g = parseInt(hex.slice(3,5),16) / 255;
  const b = parseInt(hex.slice(5,7),16) / 255;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function applyTextColor(lum) {
  const authScreen = document.querySelector('.logs-auth-screen');
  if (!authScreen) return;
  if (lum > 0.5) {
    authScreen.style.color = '#1a1a1a'; // dark text on light bg
  } else if (lum > 0.2) {
    authScreen.style.color = '#4a4a4a'; // medium-dark text
  } else {
    authScreen.style.color = ''; // default (white-ish from CSS)
  }
}

function applyLogsBg(type) {
  const app = document.getElementById('logsApp');
  if (!app) return;
  if (type === 'solid') {
    const c = document.getElementById('logsBgSolid').value;
    app.style.background = c;
    applyTextColor(getLuminance(c));
  } else if (type === 'gradient') {
    const c1 = document.getElementById('logsBgGrad1').value;
    const c2 = document.getElementById('logsBgGrad2').value;
    app.style.background = `linear-gradient(135deg, ${c1}, ${c2})`;
    // Use average luminance of both colors
    applyTextColor((getLuminance(c1) + getLuminance(c2)) / 2);
  } else {
    app.style.background = '';
    applyTextColor(0); // reset to default (dark bg)
  }
}

// Keep old log functions as stubs for compatibility
let logUser = null;
async function initLogsOld() {}
async function logRegister() {}
async function logLogin() {}
function logLogout() {}
async function loadLogs() {}
async function submitLog() {}
function openLog() {}
function closeLogModal() {}


async function initLogs() {
  if (logUser) {
    document.getElementById('logsNotAuth').style.display = 'none';
    document.getElementById('logsAuth').style.display = 'block';
    document.getElementById('logUserDisplay').textContent = '⬤ ' + logUser.toUpperCase();
    loadLogs();
  } else {
    document.getElementById('logsNotAuth').style.display = 'block';
    document.getElementById('logsAuth').style.display = 'none';
  }
}

async function logRegister() {
  const u = document.getElementById('logUsername').value.trim();
  const p = document.getElementById('logPassword').value.trim();
  const status = document.getElementById('logAuthStatus');
  if (!u || !p) { status.textContent = 'Fill all fields.'; return; }
  status.textContent = 'Creating account...';
  const { error } = await sb.auth.signUp({ email: u + '@iris-logs.local', password: p });
  if (error) { status.textContent = error.message; return; }
  await sb.from('profiles').insert({ username: u });
  logUser = u;
  document.getElementById('logUserDisplay').textContent = '⬤ ' + u.toUpperCase();
  document.getElementById('logsNotAuth').style.display = 'none';
  document.getElementById('logsAuth').style.display = 'block';
  loadLogs();
}

async function logLogin() {
  const u = document.getElementById('logUsername').value.trim();
  const p = document.getElementById('logPassword').value.trim();
  const status = document.getElementById('logAuthStatus');
  if (!u || !p) { status.textContent = 'Fill all fields.'; return; }
  status.textContent = 'Signing in...';
  const { error } = await sb.auth.signInWithPassword({ email: u + '@iris-logs.local', password: p });
  if (error) { status.textContent = error.message; return; }
  logUser = u;
  document.getElementById('logUserDisplay').textContent = '⬤ ' + u.toUpperCase();
  document.getElementById('logsNotAuth').style.display = 'none';
  document.getElementById('logsAuth').style.display = 'block';
  loadLogs();
}

function logLogout() {
  sb.auth.signOut();
  logUser = null;
  document.getElementById('logsNotAuth').style.display = 'block';
  document.getElementById('logsAuth').style.display = 'none';
}

async function loadLogs() {
  if (!logUser) return;
  const container = document.getElementById('logList');
  const { data, error } = await sb.from('employee_logs')
    .select('*')
    .eq('username', logUser)
    .order('created_at', { ascending: false });
  if (error || !data || data.length === 0) {
    container.innerHTML = '<div style="font-family:\'Share Tech Mono\',monospace;font-size:10px;color:#3a6a8a;text-align:center;padding:40px;">NO ENTRIES YET.</div>';
    return;
  }
  container.innerHTML = data.map(l => {
    const safeTitle = l.title.replace(/`/g,"'");
    const safeContent = l.content.replace(/`/g,"'");
    return `<div class="log-card" onclick='openLog(${JSON.stringify(l.title)},${JSON.stringify(new Date(l.created_at).toLocaleDateString())},${JSON.stringify(l.content)})'>
      <div class="log-card-title">${l.title.toUpperCase()}</div>
      <div class="log-card-meta">${new Date(l.created_at).toLocaleDateString()} — ${logUser.toUpperCase()}</div>
      <div class="log-card-preview">${l.content}</div>
    </div>`;
  }).join('');
}

async function submitLog() {
  const title = document.getElementById('logTitle').value.trim();
  const logContent = document.getElementById('logContent').value.trim();
  const status = document.getElementById('logSaveStatus');
  if (!title || !logContent || !logUser) { status.textContent = 'Fill all fields.'; return; }
  const { error } = await sb.from('employee_logs').insert({ username: logUser, title: title, content: logContent });
  if (!error) {
    document.getElementById('logTitle').value = '';
    document.getElementById('logContent').value = '';
    status.textContent = '> ENTRY SAVED.';
    setTimeout(() => status.textContent = '', 3000);
    loadLogs();
  } else {
    status.textContent = 'Error: ' + error.message;
  }
}

function openLog(title, date, content) {
  document.getElementById('logModalTitle').textContent = title;
  document.getElementById('logModalMeta').textContent = date;
  document.getElementById('logModalContent').textContent = content;
  document.getElementById('logModal').classList.add('visible');
}

function closeLogModal() {
  document.getElementById('logModal').classList.remove('visible');
}
