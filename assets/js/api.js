const API = 'https://testautomatizacion-production.up.railway.app/api';
const STRIPE_PK = 'pk_test_51TT0qR3WiExMtofv0bca15nUDXDWxxrbfXSOoaHvP2ygWnZ2Y2KzC3TZMhCDbpu8docHqrtdPPaLY3n9q7VEq1qc00qwElwl3R';

function apiToken() { return localStorage.getItem('token'); }

async function apiPost(path, body, auth = false) {
  const headers = { 'Content-Type': 'application/json' };
  if (auth) headers['Authorization'] = 'Bearer ' + apiToken();
  const r = await fetch(API + path, { method: 'POST', headers, body: JSON.stringify(body) });
  return r.json();
}

async function apiGet(path) {
  const r = await fetch(API + path, { headers: { 'Authorization': 'Bearer ' + apiToken() } });
  return r.json();
}

async function saveAttempt(subjectSlug, examType, score, rawScore, timeSpentSec, answers) {
  if (!apiToken()) return;
  try {
    await apiPost('/attempts', { subjectSlug, examType, score, rawScore, timeSpentSec, answers }, true);
  } catch (e) {
    console.warn('No se pudo guardar el intento:', e);
  }
}

async function saveStats(statsData) {
  if (!apiToken()) return false;
  try {
    const r = await fetch(API + '/stats', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + apiToken() },
      body: JSON.stringify({ stats: statsData })
    });
    return r.ok;
  } catch { return false; }
}

async function loadStats() {
  if (!apiToken()) return null;
  try {
    const r = await fetch(API + '/stats', { headers: { 'Authorization': 'Bearer ' + apiToken() } });
    if (!r.ok) return null;
    const data = await r.json();
    return data.stats || null;
  } catch { return null; }
}

async function login(email, password) {
  const data = await apiPost('/auth/login', { email, password });
  if (data.token) { localStorage.setItem('token', data.token); localStorage.setItem('user', JSON.stringify(data.user)); }
  return data;
}

async function register(name, email, password) {
  const data = await apiPost('/auth/register', { name, email, password });
  if (data.token) { localStorage.setItem('token', data.token); localStorage.setItem('user', JSON.stringify(data.user)); }
  return data;
}

async function stripeCheckout(name, email) {
  return apiPost('/stripe/create-checkout', { name, email });
}

async function stripeCompleteRegistration(sessionId, password) {
  return apiPost('/stripe/complete-registration', { sessionId, password });
}

function logout() { localStorage.removeItem('token'); localStorage.removeItem('user'); }
function currentUser() {
  try {
    const u = localStorage.getItem('user');
    if (!u) return null;
    const parsed = JSON.parse(u);
    if (!parsed || !parsed.id || !parsed.name) { localStorage.removeItem('user'); return null; }
    return parsed;
  } catch { localStorage.removeItem('user'); return null; }
}
