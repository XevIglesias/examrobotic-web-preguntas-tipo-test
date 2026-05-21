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

    // Móvil: usar redirect (los navegadores móviles bloquean popups)
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
                     || window.innerWidth < 768;
    if (isMobile) {
      try {
        await _auth.signInWithRedirect(provider);
      } catch (e) {
        _showAuthError('Error al redirigir: ' + e.message);
      }
      return null; // la página navegará a Google
    }

    // Escritorio: popup
    try {
      const res = await _auth.signInWithPopup(provider);
      return res.user;
    } catch (e) {
      if (e.code === 'auth/account-exists-with-different-credential') {
        _showAuthError('Ya existe una cuenta con ese email pero con otro proveedor. Elimina el usuario en Firebase Console → Authentication → Usuarios y vuelve a intentarlo.');
      } else if (e.code === 'auth/popup-closed-by-user') {
        // el usuario cerró la ventana — sin error
      } else if (e.code === 'auth/unauthorized-domain') {
        _showAuthError('Dominio no autorizado. Añádelo en Firebase Console → Authentication → Configuración → Dominios autorizados.');
      } else {
        _showAuthError('Error: ' + e.message);
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

// ── Badge verde en el tab de cuenta ─────────────────────────────
function _updateTabBadge(signedIn) {
  document.querySelectorAll('.tab-account-badge').forEach(el => {
    el.style.display = signedIn ? 'block' : 'none';
  });
}

// ── Modal de cuenta (bottom sheet) ──────────────────────────────
function _injectModalStyles() {
  if (document.getElementById('er-auth-styles')) return;
  const s = document.createElement('style');
  s.id = 'er-auth-styles';
  s.textContent = `
    #er-account-modal {
      display: none; position: fixed; inset: 0; z-index: 9999;
      flex-direction: column; justify-content: flex-end;
    }
    #er-account-modal.open { display: flex; }

    .er-modal-bd {
      flex: 1;
      background: rgba(0,0,0,0.5);
      backdrop-filter: blur(8px);
      animation: erFadeIn .25s ease;
    }
    .er-modal-sheet {
      background: var(--surface);
      border-radius: 28px 28px 0 0;
      border-top: 1px solid var(--line-soft);
      padding: 0 22px;
      padding-bottom: max(28px, env(safe-area-inset-bottom));
      animation: erSlideUp .32s cubic-bezier(.16,1,.3,1);
      max-height: 88vh; overflow-y: auto;
    }
    .er-modal-handle {
      width: 40px; height: 4px; border-radius: 2px;
      background: var(--line); margin: 10px auto 22px;
    }

    /* User row */
    .er-user-row {
      display: flex; align-items: center; gap: 14px; margin-bottom: 20px;
    }
    .er-user-photo {
      width: 54px; height: 54px; border-radius: 16px;
      object-fit: cover; flex-shrink: 0;
      border: 2px solid var(--line-soft);
    }
    .er-avatar-placeholder {
      width: 54px; height: 54px; border-radius: 16px;
      background: var(--accent); color: #fff; flex-shrink: 0;
      display: grid; place-items: center;
      font-family: 'Instrument Serif', serif; font-style: italic;
      font-size: 24px;
    }
    [data-theme="night"] .er-avatar-placeholder,
    [data-theme="dark"]  .er-avatar-placeholder {
      background: linear-gradient(135deg, oklch(.55 .20 252), oklch(.42 .18 240));
    }
    .er-user-name  { font-size: 17px; font-weight: 700; color: var(--ink); }
    .er-user-email { font-size: 12px; color: var(--muted); margin-top: 2px; }
    .er-sync-badge {
      display: inline-flex; align-items: center; gap: 4px; margin-top: 5px;
      font-size: 11px; font-weight: 600; color: var(--success);
      background: color-mix(in oklch, var(--success) 12%, transparent);
      border-radius: 20px; padding: 2px 8px;
    }

    /* Buttons */
    .er-modal-btn {
      display: flex; align-items: center; gap: 13px; width: 100%;
      padding: 14px 16px; border-radius: 14px;
      border: 1.5px solid var(--line); background: var(--bg);
      color: var(--ink); font-size: 14px; font-weight: 600;
      cursor: pointer; font-family: inherit; margin-bottom: 10px;
      text-align: left; transition: background .15s; -webkit-tap-highlight-color: transparent;
    }
    .er-modal-btn:active { background: var(--line-soft); }
    .er-modal-btn.google {
      background: #fff; color: #3c4043;
      border-color: rgba(0,0,0,.12);
      box-shadow: 0 1px 4px rgba(0,0,0,.12);
    }
    [data-theme="night"] .er-modal-btn.google,
    [data-theme="dark"]  .er-modal-btn.google {
      background: oklch(.22 .04 250); color: var(--ink);
      border-color: var(--line);
    }
    .er-modal-btn.danger  { color: var(--danger); border-color: color-mix(in oklch, var(--danger) 30%, transparent); }
    .er-modal-divider { height: 1px; background: var(--line-soft); margin: 8px 0 18px; }

    /* Tab badge */
    .tab-account-wrap { position: relative; }
    .tab-account-badge {
      display: none; position: absolute; top: 4px; right: 4px;
      width: 8px; height: 8px; border-radius: 50%;
      background: var(--success);
      border: 2px solid var(--bg);
    }

    @keyframes erFadeIn  { from { opacity: 0 }    to { opacity: 1 } }
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
      <div class="er-user-row">
        ${avatar}
        <div>
          <div class="er-user-name">${user.name || 'Usuario'}</div>
          <div class="er-user-email">${user.email}</div>
          <span class="er-sync-badge">☁ Sincronización activa</span>
        </div>
      </div>
      <div class="er-modal-divider"></div>
      <button class="er-modal-btn" onclick="ErAuth._toggleTheme()">
        <span style="font-size:20px;line-height:1">${themeIcon}</span>
        <span>${themeLabel}</span>
      </button>
      <div class="er-modal-divider"></div>
      <button class="er-modal-btn danger" onclick="ErAuth._doSignOut()">
        <span style="font-size:20px;line-height:1">↩</span>
        <span>Cerrar sesión</span>
      </button>
      <div style="height:6px"></div>`;
  } else {
    body.innerHTML = `
      <div style="text-align:center;padding:4px 0 22px">
        <div style="font-size:48px;margin-bottom:12px">🔐</div>
        <div style="font-size:19px;font-weight:800;color:var(--ink);margin-bottom:8px;letter-spacing:-.02em">Inicia sesión</div>
        <div style="font-size:13px;color:var(--muted);max-width:270px;margin:0 auto 24px;line-height:1.5">
          Tu progreso se sincronizará automáticamente<br>en todos tus dispositivos.
        </div>
      </div>
      <button class="er-modal-btn google" onclick="ErAuth._doSignIn(this)">
        <svg width="20" height="20" viewBox="0 0 24 24">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        Continuar con Google
      </button>
      <div class="er-modal-divider"></div>
      <button class="er-modal-btn" onclick="ErAuth._toggleTheme()">
        <span style="font-size:20px;line-height:1">${themeIcon}</span>
        <span>${themeLabel}</span>
      </button>
      <div style="height:6px"></div>`;
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
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.innerWidth < 768;
    if (btn) {
      btn.disabled = true;
      const label = btn.querySelector('span:last-child');
      if (label) label.textContent = isMobile ? 'Redirigiendo a Google…' : 'Conectando…';
    }
    const user = await this.signIn();
    if (user) {
      this.closeModal();
    } else if (!isMobile) {
      // Solo resetear en escritorio; en móvil la página ya navegó
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
