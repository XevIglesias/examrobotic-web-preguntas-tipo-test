let activeQs = [];
let userAns = [];
let current = 0;
let totalQs = 0;
let timeLeft = 0; 
let timerID;
let isFinished = false;
let subjectSlug = 'unknown';
let instantCorrection = false;
let instantCheckedQs = new Set();

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    if (header && !document.querySelector('.quiz-back-btn')) {
        const btn = document.createElement('button');
        btn.className = 'quiz-back-btn';
        btn.innerHTML = '←';
        btn.title = 'Cancelar y volver';
        btn.onclick = () => window.history.back();
        
        // Ensure it's the first element in header
        header.insertBefore(btn, header.firstChild);
        
        // Adjust header layout if needed
        const titleDiv = header.querySelector('div:not(.timer-box)');
        if (titleDiv) titleDiv.style.flex = '1';
    }
});

function escHtml(s) {
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;');
}

async function loadUserStats() {
    if (typeof UserStats !== 'undefined') return;
    return new Promise((resolve) => {
        const script = document.createElement('script');
        const path = window.location.pathname.toLowerCase();
        let prefix = './';
        if (path.includes('/asignaturas/')) prefix = '../../';
        else if (path.includes('\\asignaturas\\')) prefix = '../../';
        script.src = prefix + 'assets/js/user-stats.js';
        script.onload = resolve;
        script.onerror = resolve;
        document.head.appendChild(script);
    });
}

async function initSimulacro() {
    await loadUserStats();
    subjectSlug = document.querySelector('script[src*="data/"]')?.src.match(/data\/(\w+)\//)?.[1] || 'unknown';

    const urlParams = new URLSearchParams(window.location.search);
    const mode = urlParams.get('mode');

    const checkData = setInterval(() => {
        const hasData = (typeof SIMULACRO_PDF_DATA !== 'undefined' && SIMULACRO_PDF_DATA.length > 0) || 
                        (typeof EXAM_DATA !== 'undefined' && EXAM_DATA.length > 0);
        if (hasData) {
            clearInterval(checkData);
            if (mode === 'review') {
                startReview();
            } else {
                showSetupScreen();
            }
        }
    }, 100);

    // Keyboard Shortcuts
    if (!window._simKeyHandler) {
        window._simKeyHandler = (e) => {
            const setup = document.getElementById('setup-screen');
            if (setup && setup.style.display !== 'none' && setup.style.display !== '') return;
            const modal = document.getElementById('no-errors-modal');
            if (modal && modal.style.display !== 'none') return;

            if (e.key >= '1' && e.key <= '4') {
                if (!isFinished) pick(parseInt(e.key) - 1);
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                if (instantCorrection && !isFinished && userAns[current] !== null && !instantCheckedQs.has(current)) {
                    checkInstant();
                } else {
                    move(1);
                }
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                move(-1);
            } else if (e.key === 'Enter') {
                if (!isFinished) finish();
            }
        };
        window.addEventListener('keydown', window._simKeyHandler);
    }
}

function startReview() {
    const revQs = UserStats.getReviewQuestions(100, subjectSlug);
    if (revQs.length === 0) {
        showNoErrorsModal();
        return;
    }
    activeQs = revQs.sort(() => Math.random() - 0.5);
    totalQs = activeQs.length;
    startExam(totalQs, 'all', true);
}

function showNoErrorsModal() {
    const quiz = document.getElementById('quiz');
    if (quiz) quiz.style.display = 'none';

    let modal = document.getElementById('no-errors-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'no-errors-modal';
        document.body.appendChild(modal);
    }
    modal.innerHTML = `
        <div class="setup-modal" style="text-align: center; border: none; background: linear-gradient(135deg, #1e40af, #3b82f6); padding: 3.5rem; box-shadow: 0 50px 100px -20px rgba(30,64,175,0.3); border-radius: 3rem; color: white;">
            <div class="setup-header">
                <div style="font-size: 6rem; margin-bottom: 1.5rem; animation: float 3s ease-in-out infinite; filter: drop-shadow(0 15px 25px rgba(0,0,0,0.2));">🏆</div>
                <h2 style="font-size: 2.5rem; color: white; margin-bottom: 1rem; font-weight: 800; letter-spacing: -0.02em; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">¡Historial Impecable!</h2>
                <p style="font-size: 1.15rem; color: rgba(255,255,255,0.9); margin-bottom: 2.5rem; max-width: 420px; margin-left: auto; margin-right: auto; line-height: 1.6;">
                    No tienes ninguna pregunta fallada registrada. Tu rendimiento en esta asignatura es extraordinario.
                </p>
            </div>
            <div style="background: rgba(255,255,255,0.1); backdrop-filter: blur(5px); padding: 2rem; border-radius: 2rem; border: 1px solid rgba(255,255,255,0.2); margin-bottom: 3rem; box-shadow: 0 8px 32px 0 rgba(0,0,0,0.1);">
                <p style="color: #fbbf24; font-weight: 900; font-size: 1.2rem; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.1em;">Objetivo Masterizado</p>
                <p style="color: white; font-weight: 500; font-size: 1rem; margin: 0;">
                    Mantén este nivel practicando los simulacros finales.
                </p>
            </div>
            <button onclick="window.history.back()" class="start-btn" style="background: white; color: #1e40af !important; padding: 1.25rem 3rem; font-size: 1.1rem; border-radius: 1.25rem; width: auto; min-width: 260px; border: none; cursor: pointer; font-weight: 900; box-shadow: 0 15px 30px -5px rgba(0,0,0,0.2); transition: transform 0.2s;">VOLVER AL MENÚ PRINCIPAL</button>
        </div>
        <style>
            #no-errors-modal {
                position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(10px);
                z-index: 99999; display: flex; align-items: center; justify-content: center;
                padding: 1.5rem;
            }
            @keyframes float {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-25px); }
            }
        </style>
    `;
}

function showSetupScreen() {
    const quizContainer = document.getElementById('quiz');
    if (quizContainer) quizContainer.style.display = 'none';

    let setup = document.getElementById('setup-screen');
    if (!setup) {
        setup = document.createElement('div');
        setup.id = 'setup-screen';
        document.body.appendChild(setup);
    }

    const rawPool = [...(typeof SIMULACRO_PDF_DATA !== 'undefined' ? SIMULACRO_PDF_DATA : []), ...(typeof EXAM_DATA !== 'undefined' ? EXAM_DATA : [])];
    const seen = new Set();
    const allPool = [];
    rawPool.forEach(q => {
        if (!q || !q.q) return;
        const key = (q.q + (q.opts ? q.opts.join('|') : '')).trim().toLowerCase();
        if (!seen.has(key)) {
            seen.add(key);
            allPool.push(q);
        }
    });

    const topics = [...new Set(allPool.map(q => q.u))].filter(Boolean).sort((a, b) => {
        return a.localeCompare(b, undefined, {numeric: true, sensitivity: 'base'});
    });

    let topicListHtml = '';
    topics.forEach(t => {
        topicListHtml += `
            <label class="setup-topic-item">
                <input type="checkbox" class="setup-topic-cb" value="${t}" checked onchange="updateSetupCounts()">
                <span>${t}</span>
            </label>`;
    });

    setup.innerHTML = `
        <div class="setup-modal">
            <button onclick="window.history.back()" class="close-setup" title="Volver atrás">✕</button>
            <div class="setup-header">
                <h2>Configuración del Simulacro</h2>
                <p>Personaliza tu sesión de estudio antes de comenzar.</p>
            </div>
            
            <div class="setup-section">
                <div class="setup-section-title">
                    <span>1. Selecciona los Temas</span>
                    <button onclick="toggleAllSetup(true)" class="text-btn">Todo</button>
                    <button onclick="toggleAllSetup(false)" class="text-btn">Nada</button>
                </div>
                <div class="setup-topics-grid">
                    ${topicListHtml}
                </div>
            </div>

            <div class="setup-section">
                <div class="setup-section-title">2. Cantidad de Preguntas</div>
                <div class="setup-qs-row" id="setup-qs-row">
                    <!-- Buttons injected by updateSetupCounts() -->
                </div>
            </div>

            <div class="setup-section" style="margin-bottom: 1.5rem;">
                <div class="setup-section-title">3. Modo de Corrección</div>
                <label class="setup-correction-item" id="instant-correction-label">
                    <input type="checkbox" id="setup-instant-cb" onchange="this.closest('.setup-correction-item').classList.toggle('active', this.checked)">
                    <div class="correction-content">
                        <span style="font-size:1.5rem;line-height:1;">⚡</span>
                        <div style="flex:1;">
                            <div style="font-weight:800;color:#0f172a;font-size:0.95rem;">Corrección Instantánea</div>
                            <div style="font-size:0.78rem;color:#64748b;margin-top:2px;">Comprueba cada respuesta antes de continuar</div>
                        </div>
                        <div class="correction-check">✓</div>
                    </div>
                </label>
            </div>

            <div class="setup-footer">
                <button onclick="startFromSetup()" class="start-btn">EMPEZAR EXAMEN</button>
            </div>
        </div>
        <style>
            #setup-screen {
                position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(15, 23, 42, 0.95); backdrop-filter: blur(10px);
                z-index: 99999; display: flex; align-items: center; justify-content: center;
                padding: 1rem;
            }
            .setup-modal {
                background: white; width: 100%; max-width: 600px; border-radius: 2rem;
                padding: 2.5rem; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
                animation: modalIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                position: relative; /* Fixed anchor for close button */
            }
            @keyframes modalIn { from { opacity: 0; transform: scale(0.9) translateY(20px); } }
            .close-setup {
                position: absolute; top: 1.25rem; right: 1.25rem;
                background: #f1f5f9; border: none; width: 2.2rem; height: 2.2rem;
                border-radius: 50%; color: #64748b; font-size: 1rem; cursor: pointer;
                display: flex; align-items: center; justify-content: center;
                transition: all 0.2s; z-index: 10;
            }
            .setup-qs-row { 
                display: flex; gap: 0.75rem; overflow-x: auto; padding: 0.5rem 0.25rem;
                scrollbar-width: thin; scrollbar-color: #cbd5e1 transparent;
            }
            .setup-qs-row::-webkit-scrollbar { height: 6px; }
            .setup-qs-row::-webkit-scrollbar-track { background: transparent; }
            .setup-qs-row::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
            .setup-qs-row::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
            .setup-qs-btn {
                min-width: 3.5rem; height: 3.5rem; border-radius: 1rem;
                background: white; border: 1px solid #e2e8f0; color: #64748b;
                font-weight: 700; cursor: pointer; transition: all 0.2s;
                flex-shrink: 0; display: flex; align-items: center; justify-content: center;
                font-size: 1rem;
            }
            .close-setup:hover { background: #e2e8f0; color: #0f172a; transform: rotate(90deg); }
            .setup-header h2 { font-size: 1.75rem; color: #0f172a; margin-bottom: 0.5rem; font-weight: 800; }
            .setup-header p { color: #64748b; font-size: 0.95rem; margin-bottom: 2rem; }
            .setup-section { margin-bottom: 2rem; }
            .setup-section-title { 
                font-size: 0.8rem; font-weight: 800; text-transform: uppercase; 
                color: #3b82f6; letter-spacing: 0.05em; margin-bottom: 1rem;
                display: flex; gap: 1rem; align-items: center;
            }
            .text-btn { background: none; border: none; color: #64748b; font-size: 0.75rem; font-weight: 700; cursor: pointer; text-decoration: underline; }
            .setup-topics-grid { 
                display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; 
                max-height: 200px; overflow-y: auto; padding-right: 0.5rem;
                scrollbar-width: thin; scrollbar-color: #cbd5e1 transparent;
            }
            .setup-topics-grid::-webkit-scrollbar { width: 6px; }
            .setup-topics-grid::-webkit-scrollbar-track { background: transparent; }
            .setup-topics-grid::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
            .setup-topics-grid::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
            .setup-topic-item {
                display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem;
                background: #f8fafc; border-radius: 1rem; cursor: pointer;
                font-size: 0.85rem; color: #334155; font-weight: 600; border: 1.5px solid transparent;
                transition: all 0.2s;
            }
            .setup-topic-item:hover { background: #f1f5f9; border-color: #cbd5e1; }
            .setup-qs-row { display: flex; gap: 1rem; }
            .setup-qs-btn {
                flex: 1; padding: 1rem; border-radius: 1rem; border: 1.5px solid #e2e8f0;
                background: white; font-weight: 800; color: #64748b; cursor: pointer; transition: all 0.2s;
            }
            .setup-qs-btn.active { background: #3b82f6; color: white; border-color: #3b82f6; transform: translateY(-2px); }
            .official-exam {
                border: 2px solid #3b82f6 !important;
                background: linear-gradient(135deg, #ffffff, #eff6ff) !important;
                color: #1e40af !important;
                position: relative;
                box-shadow: 0 4px 12px rgba(59,130,246,0.1);
            }
            .official-exam::after {
                content: "OFICIAL";
                position: absolute; top: -1px; right: -1px;
                background: #3b82f6; color: white; font-size: 0.5rem;
                padding: 1px 5px; border-radius: 0 0.8rem 0 0.8rem; font-weight: 900;
            }
            .official-exam.active {
                background: linear-gradient(135deg, #3b82f6, #1e40af) !important;
                color: white !important;
            }
            .start-btn {
                width: 100%; padding: 1.25rem; border-radius: 1.25rem; border: none;
                background: linear-gradient(135deg, #3b82f6, #2563eb); color: white;
                font-size: 1.1rem; font-weight: 800; cursor: pointer; transition: all 0.3s;
                box-shadow: 0 10px 20px -5px rgba(59, 130, 246, 0.4);
            }
            .start-btn:hover { transform: translateY(-3px); box-shadow: 0 15px 30px -5px rgba(59, 130, 246, 0.5); }
            .setup-correction-item {
                display: flex; align-items: center; padding: 1rem 1.25rem;
                background: #f8fafc; border-radius: 1rem; cursor: pointer;
                border: 1.5px solid #e2e8f0; transition: all 0.2s; width: 100%;
            }
            .setup-correction-item input[type="checkbox"] { display: none; }
            .correction-content { display: flex; align-items: center; gap: 1rem; flex: 1; }
            .correction-check {
                width: 24px; height: 24px; border-radius: 50%; border: 2px solid #cbd5e1;
                display: flex; align-items: center; justify-content: center;
                font-size: 0.7rem; color: transparent; background: white; transition: all 0.2s;
                flex-shrink: 0;
            }
            .setup-correction-item.active { border-color: #3b82f6; background: #eff6ff; }
            .setup-correction-item.active .correction-check { background: #3b82f6; border-color: #3b82f6; color: white; }
            
            /* Dark Mode Overrides for Setup Modal */
            [data-theme="dark"] .setup-modal { background: linear-gradient(135deg, #0f172a, #1e293b); box-shadow: 0 0 0 1px #334155, 0 25px 50px -12px rgba(0,0,0,0.8); }
            [data-theme="dark"] .setup-header h2 { color: #e2e8f0; }
            [data-theme="dark"] .setup-header p { color: #94a3b8; }
            [data-theme="dark"] .close-setup { background: #1e293b; color: #e2e8f0; }
            [data-theme="dark"] .close-setup:hover { background: #334155; color: white; }
            [data-theme="dark"] .setup-topic-item { background: #1e293b; border-color: transparent; }
            [data-theme="dark"] .setup-topic-item:hover { background: #334155; border-color: #475569; }
            [data-theme="dark"] .setup-topic-item span { color: #e2e8f0; }
            [data-theme="dark"] .setup-qs-btn { background: #1e293b; color: #94a3b8; border-color: #334155; }
            [data-theme="dark"] .setup-qs-btn.active { background: #3b82f6; color: white; border-color: #3b82f6; }
            [data-theme="dark"] .setup-correction-item { background: #1e293b; border-color: #334155; }
            [data-theme="dark"] .setup-correction-item.active { background: #1e3a8a; border-color: #3b82f6; }
            [data-theme="dark"] .correction-content div[style*="color:#0f172a"] { color: #e2e8f0 !important; }
            [data-theme="dark"] .correction-content div[style*="color:#64748b"] { color: #94a3b8 !important; }
            [data-theme="dark"] .official-exam { background: linear-gradient(135deg, #1e293b, #1e3a8a) !important; color: #93c5fd !important; border-color: #3b82f6 !important; }
            [data-theme="dark"] .official-exam.active { background: linear-gradient(135deg, #3b82f6, #1e40af) !important; color: white !important; }
            [data-theme="dark"] .setup-qs-row::-webkit-scrollbar-thumb { background: #475569; }
            [data-theme="dark"] .setup-topics-grid::-webkit-scrollbar-thumb { background: #475569; }
            [data-theme="dark"] .correction-check { background: #0f172a; border-color: #475569; }
            [data-theme="dark"] .setup-section-title { color: #60a5fa; }
            [data-theme="dark"] .text-btn { color: #94a3b8; }
        </style>
    `;
    updateSetupCounts();
}

function toggleAllSetup(val) {
    document.querySelectorAll('.setup-topic-cb').forEach(cb => cb.checked = val);
    updateSetupCounts();
}

let selectedNumQs = 40;
function selectSetupQs(n) {
    selectedNumQs = n;
    document.querySelectorAll('.setup-qs-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('sq-' + n)?.classList.add('active');
}

function updateSetupCounts() {
    const rawPool = [...(typeof SIMULACRO_PDF_DATA !== 'undefined' ? SIMULACRO_PDF_DATA : []), ...(typeof EXAM_DATA !== 'undefined' ? EXAM_DATA : [])];
    
    const checked = Array.from(document.querySelectorAll('.setup-topic-cb:checked')).map(cb => cb.value);
    
    // Filter pool by topics
    const available = rawPool.filter(q => checked.includes(q.u));
    const totalAvailable = available.length;
    
    const row = document.getElementById('setup-qs-row');
    if (!row) return;

    const options = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 120, 150];
    let html = '';
    let bestOption = 10;

    options.forEach(opt => {
        if (opt <= totalAvailable) {
            const activeClass = (selectedNumQs === opt) ? 'active' : '';
            const officialClass = (opt === 40) ? 'official-exam' : '';
            html += `<button onclick="selectSetupQs(${opt})" class="setup-qs-btn ${activeClass} ${officialClass}" id="sq-${opt}">${opt}</button>`;
            bestOption = opt;
        }
    });

    // Dynamic "ALL" button if not already represented
    if (totalAvailable > 0 && !options.includes(totalAvailable)) {
        const activeClass = (selectedNumQs === totalAvailable) ? 'active' : '';
        html += `<button onclick="selectSetupQs(${totalAvailable})" class="setup-qs-btn ${activeClass}" id="sq-${totalAvailable}" style="min-width: 80px">TODAS (${totalAvailable})</button>`;
        bestOption = totalAvailable;
    }

    // If current selection is now invalid, pick the highest available
    if (selectedNumQs > totalAvailable) {
        selectedNumQs = bestOption;
    }

    row.innerHTML = html;
    // Ensure one is active
    const activeBtn = document.getElementById('sq-' + selectedNumQs);
    if (activeBtn) activeBtn.classList.add('active');
}

function startFromSetup() {
    const selected = Array.from(document.querySelectorAll('.setup-topic-cb:checked')).map(cb => cb.value);
    if (selected.length === 0) {
        alert("Selecciona al menos un tema.");
        return;
    }
    instantCorrection = document.getElementById('setup-instant-cb')?.checked || false;
    instantCheckedQs = new Set();
    document.getElementById('setup-screen').style.display = 'none';
    startExam(selectedNumQs, selected);
}

function startExam(num = 40, topics = 'all', isReview = false) {
    clearInterval(timerID);
    currentCount = num;
    
    if (!isReview) {
        const combinedPool = [...(typeof SIMULACRO_PDF_DATA !== 'undefined' ? SIMULACRO_PDF_DATA : []), ...(typeof EXAM_DATA !== 'undefined' ? EXAM_DATA : [])];

        let filteredData = combinedPool;
        if (topics !== 'all' && Array.isArray(topics)) {
            filteredData = combinedPool.filter(q => topics.includes(q.u));
        }

        if (filteredData.length === 0) {
            alert('Sin preguntas disponibles.');
            return;
        }

        totalQs = Math.min(num, filteredData.length);
        activeQs = filteredData.sort(() => Math.random() - 0.5).slice(0, totalQs);
    }

    activeQs = activeQs.map(q => {
        let newQ = JSON.parse(JSON.stringify(q));
        let optsWithIndex = newQ.opts.map((opt, i) => ({ opt, i }));
        optsWithIndex.sort(() => Math.random() - 0.5);
        newQ.opts = optsWithIndex.map(x => x.opt);
        newQ.ans = optsWithIndex.findIndex(x => x.i === newQ.ans);
        return newQ;
    });

    userAns = new Array(totalQs).fill(null);
    instantCheckedQs = new Set();
    current = 0;
    isFinished = false;
    timeLeft = totalQs * 75; 

    document.getElementById('quiz').style.display = 'block';
    document.getElementById('results').style.display = 'none';

    updateTimeUI();
    timerID = setInterval(updateTime, 1000);
    showQ();
}

function updateTime() {
    if (isFinished) return;
    timeLeft--;
    updateTimeUI();
    if (timeLeft <= 0) finish();
}

function updateTimeUI() {
    const t = Math.max(0, timeLeft);
    let m = Math.floor(t / 60);
    let s = t % 60;
    const str = `${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
    const tVal = document.getElementById('time-val');
    if (tVal) tVal.innerText = str;
    
    const timerBox = document.getElementById('timer');
    if (timerBox) {
        timerBox.style.background = '#0f172a';
        timerBox.style.color = '#fff';
        timerBox.style.padding = '8px 15px';
        timerBox.style.borderRadius = '10px';
        timerBox.style.fontWeight = '800';
        timerBox.style.fontSize = '1.2rem';
        timerBox.style.display = 'flex';
        timerBox.style.alignItems = 'center';
        timerBox.style.gap = '8px';
        timerBox.innerHTML = `<span>⏳</span> <span id="time-val">${str}</span>`;
    }
}

function showQ() {
    const q = activeQs[current];
    if (!q) return;
    document.getElementById('q-progress').innerText = `Pregunta ${current + 1} de ${totalQs}`;
    document.getElementById('q-unit').innerText = q.u;
    document.getElementById('q-text').innerText = q.q;

    const isInstantChecked = instantCorrection && !isFinished && instantCheckedQs.has(current);
    const area = document.getElementById('options-area');
    area.innerHTML = '';

    q.opts.forEach((opt, i) => {
        let cls = 'option';
        if (isFinished || isInstantChecked) {
            if (i === q.ans) cls += ' correct';
            else if (userAns[current] === i) cls += ' incorrect';
        } else {
            if (userAns[current] === i) cls += ' selected';
        }

        let icon = '';
        if (isFinished || isInstantChecked) {
            if (i === q.ans) icon = '<span class="icon">✓</span>';
            else if (userAns[current] === i) icon = '<span class="icon">✗</span>';
        }

        area.innerHTML += `<div class="${cls}" onclick="pick(${i})" role="button" aria-pressed="${userAns[current] === i}" style="display:flex; align-items:center; gap:1rem;">
            <span class="letter" style="background: #f1f5f9; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; border-radius: 8px; font-weight: 800; color: #64748b; font-size: 0.8rem;">${String.fromCharCode(65 + i)}</span>
            <div class="opt-text" style="flex:1;">${escHtml(opt)}</div> ${icon}
        </div>`;
    });

    const exp = document.getElementById('explanation');
    if ((isFinished || isInstantChecked) && q.exp) {
        exp.style.display = 'block';
        exp.innerHTML = `<strong>EXPLICACIÓN:</strong> ${escHtml(q.exp)}`;
    } else {
        exp.style.display = 'none';
    }

    // Update next button for instant correction mode
    const btnNext = document.getElementById('btn-next');
    if (btnNext) {
        if (instantCorrection && !isFinished && !isInstantChecked && userAns[current] !== null) {
            btnNext.textContent = 'Comprobar';
            btnNext.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            btnNext.style.color = 'white';
            btnNext.style.boxShadow = '0 4px 14px rgba(16,185,129,0.35)';
            btnNext.onclick = () => checkInstant();
        } else {
            btnNext.textContent = 'Siguiente';
            btnNext.style.background = '';
            btnNext.style.color = '';
            btnNext.style.boxShadow = '';
            btnNext.onclick = () => move(1);
        }
    }

    document.getElementById('btn-finish').style.display = (!isFinished) ? 'block' : 'none';
    document.getElementById('btn-menu-review').style.display = (isFinished) ? 'block' : 'none';
    renderDots();
}

function pick(i) {
    if (isFinished) return;
    if (instantCorrection && instantCheckedQs.has(current)) return;
    userAns[current] = (userAns[current] === i) ? null : i;
    showQ();
}

function checkInstant() {
    instantCheckedQs.add(current);
    showQ();
}

function move(d) {
    let next = current + d;
    if (next >= 0 && next < totalQs) { current = next; showQ(); }
}

function renderDots() {
    const grid = document.getElementById('dot-grid');
    if (!grid) return;
    grid.innerHTML = '';
    activeQs.forEach((q, i) => {
        let cls = 'dot';
        if (i === current) cls += ' active';
        
        if (isFinished) {
            if (userAns[i] === null) cls += ' empty';
            else if (userAns[i] === q.ans) cls += ' correct-dot';
            else cls += ' incorrect-dot';
        } else if (instantCorrection && instantCheckedQs.has(i)) {
            if (userAns[i] === q.ans) cls += ' correct-dot';
            else cls += ' incorrect-dot';
        } else {
            if (userAns[i] !== null) cls += ' done';
        }
        
        grid.innerHTML += `<div class="${cls}" onclick="current=${i};showQ()">${i + 1}</div>`;
    });
}

function finish() {
    clearInterval(timerID);
    isFinished = true;
    let correct = 0;
    let wrong = 0;
    
    userAns.forEach((a, i) => {
        if (a === activeQs[i].ans) correct++;
        else if (a !== null) wrong++;
    });

    let scoreVal = (correct - (wrong / 3));
    let final = totalQs > 0 ? Math.max(0, (scoreVal / totalQs) * 10).toFixed(2) : "0.00";

    const timeSpentSim = (totalQs * 75) - timeLeft;
    if (typeof UserStats !== 'undefined') {
        UserStats.recordResult(subjectSlug, 'simulacro', parseFloat(final), totalQs, activeQs, userAns, timeSpentSim);
    }
    if (typeof saveAttempt === 'function') {
        saveAttempt(subjectSlug, 'simulacro', parseFloat(final), parseFloat(scoreVal.toFixed(2)), timeSpentSim, userAns);
    }

    document.getElementById('quiz').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    document.getElementById('res-score').innerText = final;
    document.getElementById('res-msg').innerText = final >= 5.00 ? "¡APTO! Has superado el umbral del 5." : "NO APTO. Repasa la teoría.";
}

function showReview() {
    current = 0;
    document.getElementById('results').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    showQ();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSimulacro);
} else {
    initSimulacro();
}




