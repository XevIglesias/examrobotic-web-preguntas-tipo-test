function authInit() {
    renderHeader();
    const overlay = document.getElementById('auth-overlay');
    if (overlay) {
        overlay.addEventListener('click', function(e) {
            if (e.target === this) closeAuth();
        });
    }
    checkPaymentReturn();
}

function renderHeader() {
    const user = currentUser();
    const area = document.getElementById('auth-header-area');
    if (!area) return;
    if (user) {
        const initials = user.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
        const profileHref = window.location.pathname.includes('/asignaturas/') ? '../../perfil.html' : 'perfil.html';
        area.innerHTML = `
            <div class="flex items-center gap-3 shrink-0">
                <div class="hidden md:block text-right">
                    <a href="${profileHref}" class="text-sm font-bold text-foreground hover:text-primary transition-colors">${escHtml(user.name)}</a>
                    <button onclick="doLogout()" class="block text-xs text-muted font-semibold uppercase tracking-wider hover:text-red-500 transition-colors cursor-pointer">Cerrar sesión</button>
                </div>
                <a href="${profileHref}" class="w-10 h-10 rounded-full bg-blue-100 border-2 border-primary flex items-center justify-center text-primary font-bold text-sm hover:bg-blue-200 transition-colors">
                    ${initials}
                </a>
            </div>`;
    } else {
        area.innerHTML = `
            <button onclick="openAuth('login')" class="px-4 py-2 rounded-lg border border-primary text-primary text-sm font-semibold hover:bg-primary hover:text-white transition-colors">
                Iniciar sesión
            </button>`;
    }
}

function openAuth(tab) {
    const overlay = document.getElementById('auth-overlay');
    if (!overlay) {
        window.location.href = window.location.pathname.includes('/asignaturas/') ? '../../index.html' : 'index.html';
        return;
    }
    overlay.style.display = 'flex';
    switchTab(tab || 'login');
    document.getElementById('auth-email').focus();
}

function closeAuth() {
    document.getElementById('auth-overlay').style.display = 'none';
    clearAuthError();
}

function switchTab(tab) {
    document.getElementById('tab-login').classList.toggle('tab-active', tab === 'login');
    document.getElementById('tab-buy').classList.toggle('tab-active', tab === 'buy');
    document.getElementById('form-login').style.display = tab === 'login' ? 'flex' : 'none';
    document.getElementById('form-buy').style.display = tab === 'buy' ? 'flex' : 'none';
    clearAuthError();
}

function clearAuthError() {
    const el = document.getElementById('auth-error');
    if (el) el.textContent = '';
}

function showAuthError(msg) {
    const el = document.getElementById('auth-error');
    if (el) el.textContent = msg;
}

async function doLogin(e) {
    e.preventDefault();
    const btn = document.getElementById('btn-login');
    const email = document.getElementById('auth-email').value.trim();
    const password = document.getElementById('auth-password').value;
    btn.disabled = true;
    btn.textContent = 'Entrando...';
    try {
        const data = await login(email, password);
        if (data.token) {
            closeAuth();
            renderHeader();
        } else {
            showAuthError(data.error || data.message || 'Credenciales incorrectas');
        }
    } catch {
        showAuthError('Error de conexión. Inténtalo de nuevo.');
    }
    btn.disabled = false;
    btn.textContent = 'Entrar';
}

async function doBuy(e) {
    e.preventDefault();
    const btn = document.getElementById('btn-buy');
    const name = document.getElementById('buy-name').value.trim();
    const email = document.getElementById('buy-email').value.trim();
    if (!name || name.length < 2) { showAuthError('Introduce tu nombre completo.'); return; }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showAuthError('Email inválido.'); return; }
    btn.disabled = true;
    btn.textContent = 'Redirigiendo a pago...';
    try {
        const data = await stripeCheckout(name, email);
        if (data.url) {
            window.location.href = data.url;
        } else {
            showAuthError(data.error || 'No se pudo iniciar el pago. Inténtalo de nuevo.');
            btn.disabled = false;
            btn.textContent = 'Pagar 10€ y acceder →';
        }
    } catch {
        showAuthError('Error de conexión. Inténtalo de nuevo.');
        btn.disabled = false;
        btn.textContent = 'Pagar 10€ y acceder →';
    }
}

async function doCompleteRegistration() {
    const btn = document.getElementById('btn-complete-reg');
    const errEl = document.getElementById('complete-reg-error');
    const password = document.getElementById('complete-password').value;
    const password2 = document.getElementById('complete-password2').value;
    const sessionId = new URLSearchParams(window.location.search).get('session_id');

    errEl.textContent = '';
    if (!sessionId) { errEl.textContent = 'Sesión inválida. Contacta con soporte.'; return; }
    if (password.length < 8) { errEl.textContent = 'La contraseña debe tener al menos 8 caracteres.'; return; }
    if (password !== password2) { errEl.textContent = 'Las contraseñas no coinciden.'; return; }

    btn.disabled = true;
    btn.textContent = 'Creando cuenta...';
    try {
        const data = await stripeCompleteRegistration(sessionId, password);
        if (data.token) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            document.getElementById('complete-reg-overlay').style.display = 'none';
            const url = new URL(window.location);
            url.searchParams.delete('payment');
            url.searchParams.delete('session_id');
            window.history.replaceState({}, '', url);
            renderHeader();
        } else {
            errEl.textContent = data.error || 'Error al crear la cuenta.';
            btn.disabled = false;
            btn.textContent = 'Crear cuenta y entrar';
        }
    } catch {
        errEl.textContent = 'Error de conexión. Inténtalo de nuevo.';
        btn.disabled = false;
        btn.textContent = 'Crear cuenta y entrar';
    }
}

function checkPaymentReturn() {
    const params = new URLSearchParams(window.location.search);
    const payment = params.get('payment');
    const sessionId = params.get('session_id');
    const open = params.get('open');
    if (payment === 'success' && sessionId) {
        const overlay = document.getElementById('complete-reg-overlay');
        if (overlay) overlay.style.display = 'flex';
    } else if (payment === 'cancelled') {
        const url = new URL(window.location);
        url.searchParams.delete('payment');
        window.history.replaceState({}, '', url);
        openAuth('buy');
        showAuthError('Pago cancelado. Puedes intentarlo de nuevo.');
    } else if (open === 'buy') {
        const url = new URL(window.location);
        url.searchParams.delete('open');
        window.history.replaceState({}, '', url);
        openAuth('buy');
    }
}

function doLogout() {
    logout();
    renderHeader();
}

function escHtml(str) {
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

document.addEventListener('DOMContentLoaded', authInit);
