/**
 * ExamRobotic — Test Libre loading screen (Pulse style)
 * Drop-in en test-libre.html:
 *
 *   <script src="assets/js/test-libre-loader.js"></script>
 *
 * Llamar a TestLibreLoader.show({ subjects: 9, total: 40 }) para mostrar.
 * Llamar a TestLibreLoader.hide() cuando esté listo.
 *
 * El loader inyecta su markup y CSS al primer show().
 */
(function () {
  'use strict';

  const CSS = `
    .trlp-overlay {
      position: fixed; inset: 0; z-index: 9999;
      display: flex; align-items: center; justify-content: center;
      background: var(--bg, #f2f2f8);
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.45s cubic-bezier(0.16,1,0.3,1);
      overflow: hidden;
    }
    .trlp-overlay.is-on { opacity: 1; pointer-events: auto; }
    /* Backdrop aurora inherits from body::before via existing CSS */
    .trlp-overlay::before {
      content: ""; position: absolute; inset: 0;
      background:
        radial-gradient(ellipse 65% 55% at 12% -8%, var(--aurora-1, transparent), transparent 60%),
        radial-gradient(ellipse 70% 50% at 92% 12%, var(--aurora-2, transparent), transparent 65%),
        radial-gradient(ellipse 90% 60% at 50% 110%, var(--aurora-3, transparent), transparent 60%);
      filter: blur(80px) saturate(1.4);
      opacity: 0.7;
      animation: trlpAurora 16s ease-in-out infinite alternate;
    }
    [data-theme="night"] .trlp-overlay::before,
    [data-theme="dark"]  .trlp-overlay::before { filter: blur(22px) saturate(1.15); }
    @keyframes trlpAurora {
      from { transform: scale(1) translate(0,0); }
      to   { transform: scale(1.1) translate(20px, -10px); }
    }

    .trlp-inner {
      position: relative; z-index: 2;
      display: flex; flex-direction: column; align-items: center;
      gap: 32px;
      padding: 40px;
      max-width: 560px;
      width: 100%;
      text-align: center;
      transform: translateY(16px) scale(0.97);
      opacity: 0;
      transition: opacity 0.5s 0.1s cubic-bezier(0.16,1,0.3,1), transform 0.6s 0.1s cubic-bezier(0.16,1,0.3,1);
    }
    .trlp-overlay.is-on .trlp-inner { opacity: 1; transform: none; }

    /* Eyebrow */
    .trlp-eyebrow {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--accent-ink);
      display: inline-flex; align-items: center; gap: 10px;
    }
    [data-theme="night"] .trlp-eyebrow,
    [data-theme="dark"]  .trlp-eyebrow { color: oklch(0.85 0.14 245); }
    .trlp-eyebrow::before, .trlp-eyebrow::after {
      content: ""; width: 24px; height: 1px;
      background: currentColor;
      opacity: 0.5;
    }

    /* Pulse bars */
    .trlp-bars {
      display: flex; align-items: center;
      gap: 5px;
      height: 110px;
      padding: 0 8px;
    }
    .trlp-bar {
      width: 5px;
      min-height: 12px;
      border-radius: 4px;
      background: linear-gradient(180deg, var(--accent), var(--accent-ink));
      animation: trlpBar 1.4s ease-in-out infinite;
      animation-delay: calc(var(--i) * 60ms);
      transform-origin: bottom;
    }
    [data-theme="night"] .trlp-bar,
    [data-theme="dark"]  .trlp-bar {
      background: linear-gradient(180deg, oklch(0.78 0.16 245), oklch(0.5 0.20 252));
      box-shadow: 0 0 10px oklch(0.65 0.18 245 / 0.6);
    }
    @keyframes trlpBar {
      0%, 100% { transform: scaleY(0.25); opacity: 0.45; }
      50%      { transform: scaleY(1);    opacity: 1; }
    }

    /* Title */
    .trlp-title {
      font-size: clamp(28px, 4vw, 42px);
      font-weight: 600;
      letter-spacing: -0.025em;
      line-height: 1.05;
      color: var(--ink);
      text-wrap: balance;
    }
    .trlp-title .em {
      font-family: 'Instrument Serif', serif;
      font-style: italic;
      font-weight: 400;
      background: linear-gradient(120deg, var(--accent), oklch(0.62 0.17 48) 55%, oklch(0.54 0.20 15));
      -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
    }
    [data-theme="night"] .trlp-title .em,
    [data-theme="dark"]  .trlp-title .em {
      background: linear-gradient(120deg, #c5d3ff, #6c8ce6 60%, #97aef0);
      -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
    }

    /* Phase text — rotates */
    .trlp-phase {
      font-size: 14.5px;
      color: var(--ink-soft);
      min-height: 22px;
      letter-spacing: -0.005em;
      animation: trlpPhaseFade 0.5s cubic-bezier(0.16,1,0.3,1);
    }
    @keyframes trlpPhaseFade {
      from { opacity: 0; transform: translateY(6px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    /* Meta line */
    .trlp-meta {
      display: flex; gap: 18px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      letter-spacing: 0.04em;
      color: var(--muted);
      font-variant-numeric: tabular-nums;
    }
    .trlp-meta strong {
      color: var(--ink);
      font-weight: 700;
      margin-right: 4px;
    }
    .trlp-meta .sep {
      color: var(--line);
      font-weight: 400;
    }

    /* Progress track */
    .trlp-progress {
      width: 100%;
      max-width: 320px;
      height: 3px;
      background: var(--line-soft);
      border-radius: 999px;
      overflow: hidden;
      position: relative;
    }
    .trlp-progress::after {
      content: "";
      position: absolute; top: 0; bottom: 0;
      width: 40%;
      background: linear-gradient(90deg, transparent, var(--accent), transparent);
      animation: trlpProgress 1.8s ease-in-out infinite;
    }
    [data-theme="night"] .trlp-progress::after,
    [data-theme="dark"]  .trlp-progress::after {
      background: linear-gradient(90deg, transparent, oklch(0.75 0.18 245), transparent);
      box-shadow: 0 0 16px oklch(0.65 0.20 245 / 0.6);
    }
    @keyframes trlpProgress {
      0%   { left: -40%; }
      100% { left: 100%; }
    }
  `;

  const PHASES = [
    'Mezclando preguntas de las asignaturas que has elegido…',
    'Calibrando dificultad según tu nivel…',
    'Barajando aleatoriamente para evitar repeticiones…',
    'Casi listo. Preparando el banco final…',
  ];

  let phaseIdx = 0;
  let phaseTimer = null;
  let overlayEl = null;

  function ensureBuilt() {
    if (overlayEl) return overlayEl;

    // Inject CSS
    if (!document.getElementById('trlp-styles')) {
      const style = document.createElement('style');
      style.id = 'trlp-styles';
      style.textContent = CSS;
      document.head.appendChild(style);
    }

    // Build markup
    const overlay = document.createElement('div');
    overlay.className = 'trlp-overlay';
    overlay.setAttribute('role', 'status');
    overlay.setAttribute('aria-live', 'polite');

    // 24 pulse bars
    let bars = '';
    for (let i = 0; i < 24; i++) {
      bars += `<div class="trlp-bar" style="--i:${i}"></div>`;
    }

    overlay.innerHTML = `
      <div class="trlp-inner">
        <span class="trlp-eyebrow">Test libre · Multi-asignatura</span>
        <div class="trlp-bars">${bars}</div>
        <h2 class="trlp-title">Preparando <span class="em">tu test</span></h2>
        <p class="trlp-phase" id="trlp-phase">${PHASES[0]}</p>
        <div class="trlp-meta">
          <span><strong id="trlp-count">0</strong> preguntas</span>
          <span class="sep">·</span>
          <span><strong id="trlp-subjects">0</strong> asignaturas</span>
          <span class="sep">·</span>
          <span>aleatorio</span>
        </div>
        <div class="trlp-progress"></div>
      </div>
    `;
    document.body.appendChild(overlay);
    overlayEl = overlay;
    return overlay;
  }

  function rotatePhase() {
    const el = document.getElementById('trlp-phase');
    if (!el) return;
    phaseIdx = (phaseIdx + 1) % PHASES.length;
    el.style.animation = 'none';
    el.offsetHeight; // force reflow
    el.style.animation = '';
    el.textContent = PHASES[phaseIdx];
  }

  function show(opts = {}) {
    const overlay = ensureBuilt();
    document.getElementById('trlp-count').textContent    = (opts.total    ?? 40);
    document.getElementById('trlp-subjects').textContent = (opts.subjects ?? 9);
    phaseIdx = 0;
    document.getElementById('trlp-phase').textContent = PHASES[0];

    // Force reflow then trigger transition
    overlay.offsetHeight;
    requestAnimationFrame(() => overlay.classList.add('is-on'));

    if (phaseTimer) clearInterval(phaseTimer);
    phaseTimer = setInterval(rotatePhase, 1700);
  }

  function hide() {
    if (!overlayEl) return;
    overlayEl.classList.remove('is-on');
    if (phaseTimer) {
      clearInterval(phaseTimer);
      phaseTimer = null;
    }
  }

  // Public API
  window.TestLibreLoader = { show, hide };
})();
