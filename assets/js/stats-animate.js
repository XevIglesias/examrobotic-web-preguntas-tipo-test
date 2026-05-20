/**
 * ExamRobotic — Motor de animación
 * Drop-in opcional (junto a assets/css/animations.css).
 *
 * Hace tres cosas:
 *   1. Count-up animado para los números de los KPI (.kpi-val)
 *   2. Cálculo de --wave y --ripple-offset para la heatmap de actividad
 *   3. Asigna --i con orden random a los .dot del .dot-grid del quiz
 *
 * No depende de jQuery ni de la engine. Funciona auto-detectando los
 * elementos con MutationObserver — soporta render diferido (UserStats).
 */
(function () {
  'use strict';

  /* ─────── 1 · COUNT-UP ──────────────────────────────────────── */

  const easeOutCubic = t => 1 - Math.pow(1 - t, 3);

  function parseTarget(text) {
    // Reads "7,4", "7.4", "42", "14h 22m", "12días", "—"
    const cleaned = text.replace(/\s/g, '').replace(',', '.');
    const m = cleaned.match(/-?\d+(\.\d+)?/);
    if (!m) return null;
    return {
      value: parseFloat(m[0]),
      decimals: m[1] ? (m[1].length - 1) : 0,
      raw: text,
      numStr: m[0],
    };
  }

  function formatNumber(n, decimals) {
    return decimals > 0
      ? n.toFixed(decimals).replace('.', ',')
      : Math.round(n).toLocaleString('es-ES');
  }

  function animateCount(el, duration = 1400) {
    if (el._animated) return;
    const html = el.innerHTML;
    const target = parseTarget(el.textContent);
    if (!target || isNaN(target.value)) return;
    el._animated = true;

    // Find the number node and replace just the number part with a span
    // we can update independently — preserves any decorative HTML (units, etc).
    const idx = html.indexOf(target.numStr.replace('.', ','));
    const idxDot = html.indexOf(target.numStr);
    let before, after;
    if (idx >= 0) {
      before = html.slice(0, idx);
      after = html.slice(idx + target.numStr.replace('.', ',').length);
    } else if (idxDot >= 0) {
      before = html.slice(0, idxDot);
      after = html.slice(idxDot + target.numStr.length);
    } else {
      // Fallback: just replace contents
      before = '';
      after = '';
    }
    const span = document.createElement('span');
    span.className = 'count-num';
    span.textContent = '0';
    el.innerHTML = '';
    if (before) el.insertAdjacentHTML('beforeend', before);
    el.appendChild(span);
    if (after) el.insertAdjacentHTML('beforeend', after);

    const startT = performance.now();
    function tick(now) {
      const t = Math.min(1, (now - startT) / duration);
      const val = target.value * easeOutCubic(t);
      span.textContent = formatNumber(val, target.decimals);
      if (t < 1) requestAnimationFrame(tick);
      else {
        span.textContent = formatNumber(target.value, target.decimals);
        el.classList.add('is-finished');
        setTimeout(() => el.classList.remove('is-finished'), 600);
      }
    }
    requestAnimationFrame(tick);
  }

  function animateAllKpis(root = document) {
    root.querySelectorAll('.kpi-val, .summary-value').forEach(el => {
      // Skip cells with very short text (probably a label, not a number)
      if (el.textContent.trim().length > 30) return;
      if (!parseTarget(el.textContent)) return;
      // Stagger naturally with CSS animation-delay of parent; trigger here once visible
      animateCount(el);
    });
    // bar-row-val and topic-count also benefit from count-up
    root.querySelectorAll('.bar-row-val').forEach(el => animateCount(el, 1100));
    root.querySelectorAll('.topic-count').forEach(el => animateCount(el, 1000));
    root.querySelectorAll('.hist-score').forEach(el => animateCount(el, 900));
  }

  /* ─────── 2 · ACTIVITY HEATMAP WAVE ─────────────────────────── */

  function wireActivityHeatmap(grid) {
    const cells = Array.from(grid.querySelectorAll('.act-cell'));
    if (!cells.length) return;
    // Wave from bottom-right → top-left.
    // We compute a diagonal "wave" index for each cell so the animation
    // looks like a swell rolling across the calendar.
    const cols = 10;
    cells.forEach((cell, i) => {
      const row = Math.floor(i / cols);
      const col = i % cols;
      const totalRows = Math.ceil(cells.length / cols);
      // bottom-right has the highest wave index in cells order, but visually
      // we want the bottom-right (most recent date) to start FIRST.
      // The 70-day grid is rendered oldest-first, so the LAST cell is today.
      const fromEnd = cells.length - 1 - i;
      const fromEndRow = Math.floor(fromEnd / cols);
      const fromEndCol = fromEnd % cols;
      const wave = fromEndRow + fromEndCol; // diagonal from bottom-right
      cell.style.setProperty('--wave', wave);
      // ripples on active cells offset so they don't all ping in unison
      if (cell.classList.contains('active')) {
        cell.style.setProperty('--ripple-offset', (i * 0.37) % 4);
      }
    });
    // Mark the very last cell as today
    cells[cells.length - 1] && cells[cells.length - 1].classList.add('is-today');
  }

  /* ─────── 3 · QUIZ DOT GRID — random stagger ────────────────── */

  function wireDotGrid(grid) {
    const dots = Array.from(grid.querySelectorAll('.dot'));
    if (!dots.length) return;
    // Shuffle order
    const idxs = dots.map((_, i) => i);
    for (let i = idxs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [idxs[i], idxs[j]] = [idxs[j], idxs[i]];
    }
    dots.forEach((d, i) => {
      d.style.setProperty('--i', idxs[i]);
    });
  }

  /* ─────── 4 · DOT STATE-CHANGE MARKERS ──────────────────────── */
  // Add .was-correct after a celebrate frame ends so we don't replay it
  function wireDotStateMarkers(grid) {
    const obs = new MutationObserver(muts => {
      for (const m of muts) {
        if (m.type !== 'attributes' || m.attributeName !== 'class') continue;
        const el = m.target;
        if (!el.classList || !el.classList.contains('dot')) continue;
        if (el.classList.contains('correct-dot') && !el.classList.contains('was-correct')) {
          setTimeout(() => el.classList.add('was-correct'), 600);
        }
        if (el.classList.contains('incorrect-dot') && !el.classList.contains('was-incorrect')) {
          setTimeout(() => el.classList.add('was-incorrect'), 500);
        }
      }
    });
    obs.observe(grid, { attributes: true, attributeFilter: ['class'], subtree: true });
  }

  /* ─────── 5 · BOOT + OBSERVERS ──────────────────────────────── */

  function tryWire(root = document) {
    // KPIs / numbers
    animateAllKpis(root);
    // Activity heatmap
    const actGrid = root.querySelector('.act-grid');
    if (actGrid && !actGrid._wired) {
      actGrid._wired = true;
      wireActivityHeatmap(actGrid);
    }
    // Dot grid (quiz)
    const dotGrid = root.querySelector('.dot-grid');
    if (dotGrid && !dotGrid._wired) {
      dotGrid._wired = true;
      wireDotGrid(dotGrid);
      wireDotStateMarkers(dotGrid);
    }
  }

  // Initial pass
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => tryWire());
  } else {
    tryWire();
  }

  // Re-wire whenever significant content is injected (UserStats render(),
  // simulacro-engine populating the dot-grid, etc).
  const globalObs = new MutationObserver(() => {
    // small debounce
    if (globalObs._timer) clearTimeout(globalObs._timer);
    globalObs._timer = setTimeout(() => tryWire(), 60);
  });
  if (document.body) {
    globalObs.observe(document.body, { childList: true, subtree: true });
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      globalObs.observe(document.body, { childList: true, subtree: true });
    });
  }

  // Expose for manual triggers
  window.ExamRoboticAnims = { tryWire, animateCount, wireActivityHeatmap, wireDotGrid };
})();
