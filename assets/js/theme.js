/**
 * ExamRobotic — Theme toggle (día / noche)
 * Mantiene compatibilidad con código antiguo que escribió "dark" en
 * localStorage o leía data-theme="dark".
 *
 * Atributo:   data-theme="day" | "night"
 * Clase:      .dark se añade en noche (compat con dark:* de Tailwind)
 * Storage:    localStorage.theme = "day" | "night"  (o "dark"/"light" antiguo)
 */
(function () {
  const html = document.documentElement;

  function applyTheme(theme) {
    // Normalizamos "dark" → "night", "light" → "day"
    if (theme === 'dark') theme = 'night';
    if (theme === 'light') theme = 'day';
    if (theme !== 'day' && theme !== 'night') theme = 'day';

    html.setAttribute('data-theme', theme);
    html.classList.toggle('dark', theme === 'night');
    localStorage.setItem('theme', theme);
    updateButtons(theme);
  }

  function updateButtons(theme) {
    document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
      btn.innerHTML = theme === 'night'
        ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>'
        : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    });
  }

  // Init
  const saved = localStorage.getItem('theme');
  applyTheme(saved || 'day');

  // Expose
  window.toggleTheme = function () {
    const current = html.getAttribute('data-theme') || 'day';
    applyTheme(current === 'night' ? 'day' : 'night');
  };
  window.setTheme = applyTheme;

  // Wire up on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    updateButtons(html.getAttribute('data-theme') || 'day');

    // Keyboard shortcut: T
    document.addEventListener('keydown', (e) => {
      if (e.target.matches('input, textarea, select, [contenteditable]')) return;
      if (e.key === 't' || e.key === 'T') window.toggleTheme();
    });
  });
})();
