// ═══════════════════════════════════════════════════════════════════
// ExamRobotic — Google Sign-In · Firebase Auth Compat SDK
// Carga después de firebase-app-compat.js + firebase-auth-compat.js
// ═══════════════════════════════════════════════════════════════════

const _ER_FB_CFG = {
  apiKey:            "AIzaSyAtxhsbmnPqsrwwCVuyjbzBx6yoj0L6qQU",
  authDomain:        "examrobotic-f7f25.firebaseapp.com",
  databaseURL:       "https://examrobotic-f7f25-default-rtdb.europe-west1.firebasedatabase.app",
  projectId:         "examrobotic-f7f25",
  storageBucket:     "examrobotic-f7f25.firebasestorage.app",
  messagingSenderId: "273263792204",
  appId:             "1:273263792204:web:30797d8247dd67faf224e9"
};

let _auth = null;

function _fbInit() {
  if (typeof firebase === 'undefined') return false;
  if (!firebase.apps.length) firebase.initializeApp(_ER_FB_CFG);
  _auth = firebase.auth();
  return true;
}

// ── Núcleo de autenticación ──────────────────────────────────────
const ErAuth = {
  _ready: false,

  init() {
    if (!_fbInit() || this._ready) return;
    this._ready = true;

    // Recoger resultado de redirect (móvil) al volver de Google
    _auth.getRedirectResult().then(result => {
      if (result && result.user) {
        // onAuthStateChanged ya lo gestiona — nada más que hacer aquí
      }
    }).catch(e => {
      if (e.code === 'auth/account-exists-with-different-credential') {
        _showAuthError('Ya existe una cuenta con ese email. Elimina el usuario en Firebase Console → Authentication → Usuarios y vuelve a intentarlo.');
      } else if (e.code && e.code !== 'auth/credential-already-in-use') {
        console.warn('Redirect result error:', e.code);
      }
    });

    _auth.onAuthStateChanged(user => {
      if (user) {
        localStorage.setItem('er_guser', JSON.stringify({
          uid:   user.uid,
          email: user.email,
          name:  user.displayName,
          photo: user.photoURL
        }));
        // Auto-sync al detectar sesión
        setTimeout(() => {
          if (window.UserStats) {
            UserStats.syncFromCloud().then(loaded => {
              if (loaded && typeof render === 'function') render();
            });
            UserStats.syncToCloud();
          }
        }, 300);
      } else {
        localStorage.removeItem('er_guser');
      }
      _updateTabBadge(!!user);
      document.dispatchEvent(new CustomEvent('er-auth', { detail: user }));
    });
  },

  async signIn() {
    if (!_auth && !_fbInit()) return null;
    const provider = new firebase.auth.GoogleAuthProvider();

    // Usar siempre popup — funciona en móvil y escritorio con gesture de usuario.
    // signInWithRedirect tiene problemas en GitHub Pages (cross-origin storage).
    // Si el popup está bloqueado, caemos a redirect como último recurso.
    try {
      const res = await _auth.signInWithPopup(provider);
      return res.user;
    } catch (e) {
      if (e.code === 'auth/popup-blocked') {
        // Fallback: redirect (el usuario deberá permitir popups o volverá por redirect)
        try {
          await _auth.signInWithRedirect(provider);
        } catch (e2) {
          _showAuthError('No se pudo abrir Google Sign-In. Permite popups para este sitio e inténtalo de nuevo.');
        }
        return null;
      } else if (e.code === 'auth/account-exists-with-different-credential') {
        _showAuthError('Ya existe una cuenta con ese email pero con otro proveedor.');
      } else if (e.code === 'auth/popup-closed-by-user' || e.code === 'auth/cancelled-popup-request') {
        // el usuario cerró la ventana — sin error
      } else if (e.code === 'auth/unauthorized-domain') {
        _showAuthError('Dominio no autorizado en Firebase. Añade ' + location.hostname + ' en Firebase Console → Authentication → Dominios autorizados.');
      } else {
        _showAuthError('Error al iniciar sesión: ' + (e.message || e.code));
      }
      console.warn('Google sign-in:', e.code, e.message);
      return null;
    }
  },

  async signOut() {
    if (_auth) await _auth.signOut();
    localStorage.removeItem('er_guser');
    _updateTabBadge(false);
  },

  getUser() {
    try { return JSON.parse(localStorage.getItem('er_guser')) || null; }
    catch { return null; }
  },

  isSignedIn() { return !!this.getUser(); }
};

window.ErAuth = ErAuth;

// ── Helpers ──────────────────────────────────────────────────────
function _showAuthError(msg) {
  const body = document.getElementById('er-modal-body');
  if (!body) { alert(msg); return; }
  const err = document.createElement('div');
  err.style.cssText = 'background:color-mix(in oklch,var(--danger) 12%,transparent);color:var(--danger);border-radius:10px;padding:12px 14px;font-size:13px;margin-bottom:12px;line-height:1.45;';
  err.textContent = msg;
  body.prepend(err);
}

// ── Badge verde en tab + header ──────────────────────────────────
function _updateTabBadge(signedIn) {
  document.querySelectorAll('.tab-account-badge, .header-account-badge').forEach(el => {
    el.style.display = signedIn ? 'block' : 'none';
  });
}

// ── Modal de cuenta (bottom sheet) ──────────────────────────────
function _injectModalStyles() {
  if (document.getElementById('er-auth-styles')) return;
  const s = document.createElement('style');
  s.id = 'er-auth-styles';
  s.textContent = `
    /* ── Overlay ── */
    #er-account-modal {
      display: none; position: fixed; inset: 0; z-index: 9999;
      flex-direction: column; justify-content: flex-end;
    }
    #er-account-modal.open { display: flex; }

    .er-modal-bd {
      flex: 1;
      background: rgba(0,0,0,0.48);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      animation: erFadeIn .2s ease both;
    }

    /* ── Bottom sheet ── */
    .er-modal-sheet {
      position: relative; z-index: 1;
      background: #ffffff;
      border-radius: 28px 28px 0 0;
      border-top: 1px solid rgba(0,0,0,0.08);
      box-shadow: 0 -8px 40px rgba(0,0,0,0.14);
      padding: 0 16px;
      padding-bottom: max(32px, env(safe-area-inset-bottom, 0px));
      animation: erSlideUp .34s cubic-bezier(.16,1,.3,1) both;
      max-height: 86vh; overflow-y: auto;
    }
    [data-theme="night"] .er-modal-sheet,
    [data-theme="dark"]  .er-modal-sheet {
      background: #111827;
      border-top-color: rgba(255,255,255,0.08);
      box-shadow: 0 -8px 40px rgba(0,0,0,0.5);
    }

    /* ── Handle ── */
    .er-modal-handle {
      width: 40px; height: 4px; border-radius: 4px;
      background: #e5e7eb;
      margin: 14px auto 20px;
    }
    [data-theme="night"] .er-modal-handle,
    [data-theme="dark"]  .er-modal-handle { background: rgba(255,255,255,0.12); }

    /* ── Sign-in hero ── */
    .er-signin-hero { text-align: center; padding: 4px 8px 24px; }
    .er-signin-icon {
      width: 68px; height: 68px; border-radius: 22px;
      background: linear-gradient(135deg, #e0e7ff, #c7d2fe);
      display: grid; place-items: center; font-size: 32px;
      margin: 0 auto 16px;
      box-shadow: 0 4px 20px rgba(99,102,241,0.2);
    }
    [data-theme="night"] .er-signin-icon,
    [data-theme="dark"]  .er-signin-icon {
      background: linear-gradient(135deg, #1e3a5f, #1e2d5a);
      box-shadow: 0 4px 20px rgba(99,102,241,0.3);
    }
    .er-signin-title {
      font-size: 20px; font-weight: 700; color: #111827;
      letter-spacing: -.02em; margin-bottom: 6px;
      font-family: inherit;
    }
    [data-theme="night"] .er-signin-title,
    [data-theme="dark"]  .er-signin-title { color: #f9fafb; }
    .er-signin-sub {
      font-size: 13.5px; color: #6b7280; line-height: 1.55;
      max-width: 260px; margin: 0 auto;
      font-family: inherit;
    }
    [data-theme="night"] .er-signin-sub,
    [data-theme="dark"]  .er-signin-sub { color: #9ca3af; }

    /* ── Botón Google ── */
    .er-google-btn {
      display: flex; align-items: center; justify-content: center; gap: 12px;
      width: 100%; padding: 14px 20px;
      background: #fff; color: #3c4043;
      border: 1.5px solid #dadce0;
      border-radius: 14px;
      font-size: 15px; font-weight: 600; font-family: inherit;
      cursor: pointer; margin-bottom: 8px;
      box-shadow: 0 1px 6px rgba(0,0,0,0.08);
      -webkit-tap-highlight-color: transparent;
      transition: box-shadow .15s, transform .1s, background .15s;
    }
    .er-google-btn:hover { box-shadow: 0 3px 12px rgba(0,0,0,0.13); }
    .er-google-btn:active { transform: scale(0.98); background: #f8f8f8; }
    [data-theme="night"] .er-google-btn,
    [data-theme="dark"]  .er-google-btn {
      background: #1f2937; color: #e5e7eb;
      border-color: rgba(255,255,255,0.12);
      box-shadow: none;
    }

    /* ── Separador ── */
    .er-modal-sep {
      display: flex; align-items: center; gap: 10px;
      margin: 16px 0; color: #9ca3af; font-size: 11px;
      font-weight: 600; text-transform: uppercase; letter-spacing: .06em;
    }
    .er-modal-sep::before, .er-modal-sep::after {
      content: ''; flex: 1; height: 1px; background: #e5e7eb;
    }
    [data-theme="night"] .er-modal-sep::before,
    [data-theme="night"] .er-modal-sep::after,
    [data-theme="dark"]  .er-modal-sep::before,
    [data-theme="dark"]  .er-modal-sep::after { background: rgba(255,255,255,0.08); }

    /* ── Botones de ajuste ── */
    .er-modal-row {
      display: flex; align-items: center; gap: 14px;
      width: 100%; padding: 13px 14px;
      background: #f9fafb; border: 1px solid #f3f4f6;
      border-radius: 14px; cursor: pointer;
      font-size: 14.5px; font-weight: 500; color: #374151;
      font-family: inherit; text-align: left; margin-bottom: 8px;
      -webkit-tap-highlight-color: transparent;
      transition: background .13s, transform .1s;
    }
    .er-modal-row:active { background: #f3f4f6; transform: scale(0.99); }
    [data-theme="night"] .er-modal-row,
    [data-theme="dark"]  .er-modal-row {
      background: #1f2937; border-color: rgba(255,255,255,0.06);
      color: #e5e7eb;
    }
    [data-theme="night"] .er-modal-row:active,
    [data-theme="dark"]  .er-modal-row:active { background: #263244; }
    .er-modal-row-icon {
      width: 34px; height: 34px; border-radius: 10px; flex-shrink: 0;
      display: grid; place-items: center; font-size: 17px;
      background: #fff; border: 1px solid #e5e7eb;
    }
    [data-theme="night"] .er-modal-row-icon,
    [data-theme="dark"]  .er-modal-row-icon {
      background: #111827; border-color: rgba(255,255,255,0.08);
    }
    .er-modal-row.er-danger { color: #ef4444; }
    .er-modal-row.er-danger .er-modal-row-icon {
      background: #fff1f1; border-color: #fecaca;
    }
    [data-theme="night"] .er-modal-row.er-danger .er-modal-row-icon,
    [data-theme="dark"]  .er-modal-row.er-danger .er-modal-row-icon {
      background: rgba(239,68,68,0.12); border-color: rgba(239,68,68,0.2);
    }

    /* ── Tarjeta usuario ── */
    .er-user-card {
      display: flex; align-items: center; gap: 14px;
      padding: 16px; border-radius: 18px;
      background: linear-gradient(135deg, #eff6ff, #f0fdf4);
      border: 1px solid #bfdbfe;
      margin-bottom: 16px;
    }
    [data-theme="night"] .er-user-card,
    [data-theme="dark"]  .er-user-card {
      background: linear-gradient(135deg, rgba(30,58,95,0.5), rgba(5,46,22,0.4));
      border-color: rgba(59,130,246,0.25);
    }
    .er-user-photo {
      width: 52px; height: 52px; border-radius: 16px;
      object-fit: cover; flex-shrink: 0;
      box-shadow: 0 2px 10px rgba(0,0,0,0.15);
    }
    .er-avatar-placeholder {
      width: 52px; height: 52px; border-radius: 16px;
      background: linear-gradient(135deg, #6366f1, #8b5cf6);
      color: #fff; flex-shrink: 0;
      display: grid; place-items: center;
      font-family: 'Instrument Serif', serif; font-style: italic;
      font-size: 24px;
    }
    .er-user-name  { font-size: 15px; font-weight: 700; color: #111827; line-height: 1.2; }
    [data-theme="night"] .er-user-name,
    [data-theme="dark"]  .er-user-name { color: #f9fafb; }
    .er-user-email { font-size: 12px; color: #6b7280; margin-top: 3px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .er-sync-badge {
      display: inline-flex; align-items: center; gap: 4px; margin-top: 6px;
      font-size: 11px; font-weight: 700; color: #059669;
      background: #d1fae5; border-radius: 20px; padding: 2px 8px;
    }
    [data-theme="night"] .er-sync-badge,
    [data-theme="dark"]  .er-sync-badge {
      color: #34d399; background: rgba(52,211,153,0.15);
    }

    /* ── Tab badge ── */
    .tab-account-wrap { position: relative; }
    .tab-account-badge {
      display: none; position: absolute; top: 6px; right: 10px;
      width: 7px; height: 7px; border-radius: 50%;
      background: #10b981; border: 2px solid #fff;
    }
    [data-theme="night"] .tab-account-badge,
    [data-theme="dark"]  .tab-account-badge { border-color: #1a1a2e; }

    /* ── Header badge (desktop) ── */
    .header-account-btn { position: relative; }
    .header-account-badge {
      display: none; position: absolute; top: 6px; right: 6px;
      width: 7px; height: 7px; border-radius: 50%;
      background: #10b981; border: 2px solid var(--bg, #fff);
    }

    @keyframes erFadeIn  { from { opacity: 0 } to { opacity: 1 } }
    @keyframes erSlideUp { from { transform: translateY(100%) } to { transform: translateY(0) } }
  `;
  document.head.appendChild(s);
}

function _buildModal() {
  if (document.getElementById('er-account-modal')) return;
  _injectModalStyles();
  const m = document.createElement('div');
  m.id = 'er-account-modal';
  m.innerHTML = `
    <div class="er-modal-bd" onclick="ErAuth.closeModal()"></div>
    <div class="er-modal-sheet">
      <div class="er-modal-handle"></div>
      <div id="er-modal-body"></div>
    </div>`;
  document.body.appendChild(m);
}

const _googleLogoSVG = `<svg width="20" height="20" viewBox="0 0 24 24" style="flex-shrink:0">
  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
</svg>`;

function _renderModal() {
  const body = document.getElementById('er-modal-body');
  if (!body) return;
  const user   = ErAuth.getUser();
  const isDark = ['night','dark'].includes(document.documentElement.getAttribute('data-theme'));
  const themeIcon  = isDark ? '☀️' : '🌙';
  const themeLabel = isDark ? 'Modo claro' : 'Modo oscuro';

  if (user) {
    const initial = (user.name || user.email || '?')[0].toUpperCase();
    const avatar  = user.photo
      ? `<img src="${user.photo}" class="er-user-photo" referrerpolicy="no-referrer">`
      : `<div class="er-avatar-placeholder">${initial}</div>`;
    body.innerHTML = `
      <div class="er-user-card">
        ${avatar}
        <div style="min-width:0;flex:1">
          <div class="er-user-name">${user.name || 'Usuario'}</div>
          <div class="er-user-email">${user.email}</div>
          <span class="er-sync-badge">☁ Sincronizado</span>
        </div>
      </div>
      <button class="er-modal-row" onclick="ErAuth._toggleTheme()">
        <span class="er-modal-row-icon">${themeIcon}</span>
        <span>${themeLabel}</span>
      </button>
      <button class="er-modal-row er-danger" onclick="ErAuth._doSignOut()">
        <span class="er-modal-row-icon">↩</span>
        <span>Cerrar sesión</span>
      </button>
      <div style="height:8px"></div>`;
  } else {
    body.innerHTML = `
      <div class="er-signin-hero">
        <div class="er-signin-icon">🔐</div>
        <div class="er-signin-title">Inicia sesión</div>
        <div class="er-signin-sub">Tu progreso se sincronizará automáticamente en todos tus dispositivos.</div>
      </div>
      <button class="er-google-btn" onclick="ErAuth._doSignIn(this)">
        ${_googleLogoSVG}
        <span>Continuar con Google</span>
      </button>
      <div class="er-modal-sep">Ajustes</div>
      <button class="er-modal-row" onclick="ErAuth._toggleTheme()">
        <span class="er-modal-row-icon">${themeIcon}</span>
        <span>${themeLabel}</span>
      </button>
      <div style="height:8px"></div>`;
  }
}

// Adjuntar métodos de modal a ErAuth
Object.assign(ErAuth, {
  openModal() {
    _buildModal();
    _renderModal();
    document.getElementById('er-account-modal').classList.add('open');
    document.body.style.overflow = 'hidden';
  },
  closeModal() {
    const m = document.getElementById('er-account-modal');
    if (m) m.classList.remove('open');
    document.body.style.overflow = '';
  },
  async _doSignIn(btn) {
    if (btn) {
      btn.disabled = true;
      const label = btn.querySelector('span:last-child');
      if (label) label.textContent = 'Conectando…';
    }
    const user = await this.signIn();
    if (user) {
      this.closeModal();
    } else {
      // Resetear botón si no navegamos a redirect
      _renderModal();
    }
  },
  async _doSignOut() {
    await this.signOut();
    _renderModal();
    if (typeof render === 'function') setTimeout(render, 100);
  },
  _toggleTheme() {
    if (typeof toggleTheme === 'function') toggleTheme();
    setTimeout(_renderModal, 60);
  }
});

// ── Auto-init ────────────────────────────────────────────────────
(function tryInit() {
  if (typeof firebase !== 'undefined') {
    ErAuth.init();
    _injectModalStyles();
    // Mostrar badge si ya hay sesión guardada
    _updateTabBadge(!!ErAuth.getUser());
  } else {
    setTimeout(tryInit, 150);
  }
})();
