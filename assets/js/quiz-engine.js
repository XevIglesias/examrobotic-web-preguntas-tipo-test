let activeQs = [];
let userAns = [];
let current = 0;
let totalQs = 40;
let timeLeft = 3000; 
let timerID;
let isFinished = false;
let subjectSlug = 'unknown';

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

async function initQuiz() {
    await loadUserStats();
    subjectSlug = document.querySelector('script[src*="data/"]')?.src.match(/data\/(\w+)\//)?.[1] || 'unknown';
    
    // Inject small selector in the UI
    injectSelectorUI();

    const isReviewMode = window.location.search.includes('mode=review');
    if (isReviewMode && typeof UserStats !== 'undefined') {
        const reviewQs = UserStats.getReviewQuestions(100, subjectSlug);
        if (reviewQs.length > 0) {
            // Do NOT reassign EXAM_DATA as it is const. Use activeQs directly or a temp var.
            const sortedReview = reviewQs.sort(() => Math.random() - 0.5);
            startExam(sortedReview.length, 'all', sortedReview);
        } else {
            showNoErrorsModal();
        }
    } else {
        // Start with 40 by default or total available
        startExam(40, 'all');
    }

    // Keyboard Shortcuts
    if (!window._quizKeyHandler) {
        window._quizKeyHandler = (e) => {
            const modal = document.getElementById('no-errors-modal');
            if (modal && modal.style.display !== 'none') return;

            if (e.key >= '1' && e.key <= '4') {
                if (!isFinished) pick(parseInt(e.key) - 1);
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                move(1);
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                move(-1);
            } else if (e.key === 'Enter') {
                if (!isFinished) finish();
            }
        };
        window.addEventListener('keydown', window._quizKeyHandler);
    }
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
            .setup-qs-row { 
                display: flex; gap: 0.75rem; overflow-x: auto; padding: 0.5rem 0.25rem;
                scrollbar-width: none; -ms-overflow-style: none;
                mask-image: linear-gradient(to right, black 85%, transparent 100%);
            }
            .setup-qs-row::-webkit-scrollbar { display: none; }
            .setup-qs-btn {
                min-width: 3.5rem; height: 3.5rem; border-radius: 1rem;
                background: white; border: 1px solid #e2e8f0; color: #64748b;
                font-weight: 700; cursor: pointer; transition: all 0.2s;
                flex-shrink: 0; display: flex; align-items: center; justify-content: center;
                font-size: 1rem;
            }
            @keyframes float {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-25px); }
            }
            #no-errors-modal {
                position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(10px);
                z-index: 99999; display: flex; align-items: center; justify-content: center;
                padding: 1.5rem;
            }
        </style>
    `;
}

function injectSelectorUI() {
    const timerArea = document.getElementById('timer-area') || document.querySelector('.flex.items-center.gap-4.mb-8');
    if (timerArea && !document.getElementById('qs-selector')) {
        const sel = document.createElement('div');
        sel.id = 'qs-selector';
        sel.className = 'flex flex-wrap items-center gap-4 ml-auto';
        
        // Topic Selector
        const topics = [...new Set(EXAM_DATA.map(q => q.u))];
        let topicOptions = '<option value="all">TODOS LOS TEMAS</option>';
        topics.forEach(t => {
            topicOptions += `<option value="${t}">${t}</option>`;
        });

        sel.innerHTML = `
            <div class="flex items-center gap-2">
                <span class="text-[10px] font-bold text-muted uppercase tracking-wider">Tema:</span>
                <select id="topic-select" onchange="applyFilters()" class="text-[11px] font-bold border rounded-lg p-1 bg-slate-50 text-slate-700">
                    ${topicOptions}
                </select>
            </div>
            <div class="flex items-center gap-2">
                <span class="text-[10px] font-bold text-muted uppercase tracking-wider">Preguntas:</span>
                <div class="flex bg-slate-100 p-1 rounded-lg border border-slate-200 overflow-x-auto no-scrollbar" style="scrollbar-width: none;">
                    <button onclick="changeCount(10)" class="qs-btn" id="btn-10">10</button>
                    <button onclick="changeCount(20)" class="qs-btn" id="btn-20">20</button>
                    <button onclick="changeCount(40)" class="qs-btn active" id="btn-40">40</button>
                    <button onclick="changeCount(80)" class="qs-btn" id="btn-80">80</button>
                    <button onclick="changeCount(100)" class="qs-btn" id="btn-100">100</button>
                    <button onclick="changeCount(EXAM_DATA.length)" class="qs-btn" id="btn-${EXAM_DATA.length}">TODAS</button>
                </div>
            </div>

            <style>
                .no-scrollbar::-webkit-scrollbar { height: 4px; }
                .no-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .no-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
                .qs-btn { flex-shrink: 0; min-width: 3.5rem; }
            </style>
                .qs-btn {
                    padding: 2px 8px; font-size: 11px; font-weight: 800; border-radius: 5px;
                    color: #64748b; transition: all 0.2s;
                }
                .qs-btn:hover { background: rgba(255,255,255,0.8); color: #3b82f6; }
                .qs-btn.active { background: white; color: #3b82f6; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
                #topic-select { outline: none; border-color: #e2e8f0; cursor: pointer; }
                #topic-select:focus { border-color: #3b82f6; }
            </style>
        `;
        timerArea.appendChild(sel);
    }
}

let currentCount = 40;
function changeCount(n) {
    currentCount = n;
    applyFilters();
}

function applyFilters() {
    const tSelect = document.getElementById('topic-select');
    const topic = tSelect ? tSelect.value : 'all';
    startExam(currentCount, topic);
}

function startExam(num, topic = 'all', customPool = null) {
    const sourceData = customPool || (typeof EXAM_DATA !== 'undefined' ? EXAM_DATA : []);
    if (sourceData.length === 0) return;
    
    currentCount = num;
    let filteredData = [...sourceData];
    if (topic !== 'all') {
        filteredData = sourceData.filter(q => q.u === topic);
    }
    
    if (filteredData.length === 0) {
        alert("Sin preguntas para este tema.");
        return;
    }

    totalQs = Math.min(num, filteredData.length);
    activeQs = filteredData.sort(() => Math.random() - 0.5).slice(0, totalQs);
    
    userAns = new Array(totalQs).fill(null);
    current = 0; 
    isFinished = false; 
    timeLeft = totalQs * 75; 
    
    // Update UI buttons
    document.querySelectorAll('.qs-btn').forEach(b => b.classList.remove('active'));
    const activeBtn = document.getElementById(`btn-${num}`);
    if (activeBtn) activeBtn.classList.add('active');

    document.getElementById('quiz').style.display = 'block';
    document.getElementById('results').style.display = 'none';
    
    clearInterval(timerID);
    timerID = setInterval(updateTime, 1000);
    showQ();
}

function updateTime() {
    if(isFinished) return;
    timeLeft--;
    let m = Math.floor(timeLeft/60);
    let s = timeLeft%60;
    const tVal = document.getElementById('time-val');
    if (tVal) tVal.innerText = `${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
    else {
        const timer = document.getElementById('timer');
        if (timer) timer.innerText = `${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
    }
    if(timeLeft <= 0) finish();
}

function showQ() {
    const q = activeQs[current];
    const prog = document.getElementById('q-progress');
    if (prog) prog.innerText = `Pregunta ${current+1} de ${totalQs}`;
    
    const unit = document.getElementById('q-unit');
    if (unit) unit.innerText = q.u;
    
    const text = document.getElementById('q-text');
    if (text) text.innerText = q.q; 
    
    const area = document.getElementById('options-area');
    if (!area) return;
    area.innerHTML = '';
    
    q.opts.forEach((opt, i) => {
        let cls = 'option';
        if(isFinished) {
            if(i === q.ans) cls += ' correct';
            else if(userAns[current] === i) cls += ' incorrect';
        } else {
            if(userAns[current] === i) cls += ' selected';
        }
        
        let icon = '';
        if(isFinished) {
            if(i === q.ans) icon = '<span style="margin-left:auto;font-weight:900">✓</span>';
            else if(userAns[current] === i) icon = '<span style="margin-left:auto;font-weight:900">✗</span>';
        }
        
        area.innerHTML += `<div class="${cls}" onclick="pick(${i})" onkeydown="if(event.key==='Enter'||event.key===' '){pick(${i});event.preventDefault()}" tabindex="0" role="button" aria-pressed="${userAns[current]===i}">
            <span style="opacity:0.3; margin-right:15px; font-weight:800" aria-hidden="true">${String.fromCharCode(65+i)}</span>
            ${escHtml(opt)} ${icon}
        </div>`;
    });

    const exp = document.getElementById('explanation');
    if (exp) {
        if(isFinished) {
            exp.style.display = 'block';
            exp.innerHTML = `<strong>EXPLICACIÓN:</strong> ${escHtml(q.exp)}`;
        } else {
            exp.style.display = 'none';
        }
    }

    const btnFinish = document.getElementById('btn-finish');
    if (btnFinish) btnFinish.style.display = (!isFinished) ? 'block' : 'none';
    
    const btnReview = document.getElementById('btn-menu-review');
    if (btnReview) btnReview.style.display = (isFinished) ? 'block' : 'none';
    
    renderDots();
}

function pick(i) {
    if(isFinished) return;
    userAns[current] = (userAns[current] === i) ? null : i;
    showQ();
}

function move(d) {
    let next = current + d;
    if(next >= 0 && next < totalQs) { current = next; showQ(); }
}

function renderDots() {
    const grid = document.getElementById('dot-grid');
    if (!grid) return;
    grid.innerHTML = '';
    activeQs.forEach((q, i) => {
        let cls = 'dot';
        if(i === current) cls += ' active';
        
        if (isFinished) {
            if (userAns[i] === null) cls += ' empty';
            else if (userAns[i] === q.ans) cls += ' correct-dot';
            else cls += ' incorrect-dot';
        } else {
            if(userAns[i] !== null) cls += ' done';
        }
        
        grid.innerHTML += `<div class="${cls}" onclick="current=${i};showQ()" onkeydown="if(event.key==='Enter'||event.key===' '){current=${i};showQ();event.preventDefault()}" tabindex="0" role="button" aria-label="Pregunta ${i+1}">${i+1}</div>`;
    });
}

function finish() {
    clearInterval(timerID);
    isFinished = true;
    let score = 0;
    userAns.forEach((a, i) => {
        if(a === activeQs[i].ans) score += 1;
        else if(a !== null) score -= 0.333333; 
    });
    
    let final = Math.max(0, (score / totalQs) * 10).toFixed(2);
    const timeSpent = (totalQs * 75) - timeLeft;

    if (typeof UserStats !== 'undefined') {
        UserStats.recordResult(subjectSlug, 'real', parseFloat(final), totalQs, activeQs, userAns, timeSpent);
    }
    if (typeof saveAttempt === 'function') {
        saveAttempt(subjectSlug, 'real', parseFloat(final), parseFloat(score.toFixed(2)), timeSpent, userAns);
    }

    const quiz = document.getElementById('quiz');
    if (quiz) quiz.style.display = 'none';
    
    const res = document.getElementById('results');
    if (res) res.style.display = 'block';
    
    const scoreVal = document.getElementById('res-score');
    if (scoreVal) scoreVal.innerText = final;
    
    const msg = document.getElementById('res-msg');
    if (msg) msg.innerText = final >= 5.00 ? "¡APTO! Has superado el umbral del 5." : "NO APTO. Repasa la teoría.";
}

function showReview() {
    current = 0;
    document.getElementById('results').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    showQ();
}

// Start sequence
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initQuiz);
} else {
    initQuiz();
}
