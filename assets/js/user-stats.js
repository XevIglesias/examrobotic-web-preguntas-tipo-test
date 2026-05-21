// ExamRobotic User Statistics & Persistence Engine
// Firebase Realtime Database: sync automático entre dispositivos
const _FB_DB = 'https://examrobotic-f7f25-default-rtdb.europe-west1.firebasedatabase.app';

function _fbKey() {
    try {
        // 1) Google Auth (prioritario — UID estable entre dispositivos)
        if (typeof ErAuth !== 'undefined') {
            const gu = ErAuth.getUser();
            if (gu && gu.uid) return gu.uid;
        }
        // 2) Usuario de api.js (Railway)
        const u = typeof currentUser === 'function' ? currentUser() : null;
        if (u) {
            const raw = u.id || u.email || null;
            if (raw) return String(raw).replace(/[.#$[\]/]/g, '_');
        }
        // 3) Email manual (fallback)
        const syncEmail = localStorage.getItem('er_sync_email');
        if (syncEmail) return String(syncEmail).replace(/[.#$[\]/]/g, '_');
        return null;
    } catch { return null; }
}

async function _fbIdToken() {
    try {
        if (typeof firebase === 'undefined' || !firebase.apps.length) return null;
        const user = firebase.auth().currentUser;
        if (!user) return null;
        return await user.getIdToken();
    } catch { return null; }
}

async function _fbSave(stats) {
    const key = _fbKey();
    if (!key) return false;
    try {
        const token = await _fbIdToken();
        const url = `${_FB_DB}/stats/${key}.json${token ? `?auth=${token}` : ''}`;
        const r = await fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...stats, _savedAt: Date.now() })
        });
        return r.ok;
    } catch { return false; }
}

async function _fbLoad() {
    const key = _fbKey();
    if (!key) return null;
    try {
        const token = await _fbIdToken();
        const url = `${_FB_DB}/stats/${key}.json${token ? `?auth=${token}` : ''}`;
        const r = await fetch(url);
        if (!r.ok) return null;
        const data = await r.json();
        if (!data || !Array.isArray(data.history)) return null;
        const { _savedAt, ...stats } = data;
        return stats;
    } catch { return null; }
}

const UserStats = {
    data: JSON.parse(localStorage.getItem('er_stats')) || {
        subjects: {},
        failures: {},
        history: []
    },

    _syncTimer: null,

    save() {
        localStorage.setItem('er_stats', JSON.stringify(this.data));
        clearTimeout(this._syncTimer);
        this._syncTimer = setTimeout(() => this.syncToCloud(), 3000);
    },

    async syncToCloud() {
        const ok = await _fbSave(this.data);
        if (ok) this._notifySyncStatus('synced');
    },

    async syncFromCloud() {
        const remote = await _fbLoad();
        if (!remote) return false;

        const localHistory  = this.data.history || [];
        const remoteHistory = remote.history    || [];

        // Merge: unir ambos historiales sin duplicados (por date+subject+score)
        const merged = [...remoteHistory];
        localHistory.forEach(lh => {
            const dup = remoteHistory.some(
                rh => rh.date === lh.date && rh.subject === lh.subject && rh.score === lh.score
            );
            if (!dup) merged.push(lh);
        });
        merged.sort((a, b) => a.date - b.date);
        if (merged.length > 100) merged.splice(0, merged.length - 100);

        // Merge subjects: quedarse con el que tiene más sesiones por asignatura
        const subjects = { ...(remote.subjects || {}) };
        Object.entries(this.data.subjects || {}).forEach(([k, v]) => {
            if (!subjects[k] || (v.scores || []).length > (subjects[k].scores || []).length) {
                subjects[k] = v;
            }
        });

        // Merge failures: acumular contadores
        const failures = JSON.parse(JSON.stringify(remote.failures || {}));
        Object.entries(this.data.failures || {}).forEach(([subj, qs]) => {
            if (!failures[subj]) failures[subj] = {};
            Object.entries(qs).forEach(([qid, f]) => {
                if (!failures[subj][qid]) failures[subj][qid] = f;
                else failures[subj][qid].count = Math.max(failures[subj][qid].count, f.count);
            });
        });

        const hadMore = merged.length > localHistory.length;
        this.data = { subjects, failures, history: merged };
        localStorage.setItem('er_stats', JSON.stringify(this.data));

        if (hadMore) this._notifySyncStatus('loaded');
        // Siempre subir la versión mergeada para que la nube esté actualizada
        _fbSave(this.data);
        return hadMore;
    },

    _notifySyncStatus(status) {
        const el = document.getElementById('sync-status');
        if (!el) return;
        if (status === 'synced') {
            el.textContent = '☁️ Guardado en la nube';
            el.style.color = '#10b981';
        } else if (status === 'loaded') {
            el.textContent = '☁️ Datos recuperados';
            el.style.color = '#3b82f6';
        }
        setTimeout(() => { el.textContent = ''; }, 3000);
    },

    recordResult(subject, type, score, totalQs, questions, userAnswers, timeSpentSec) {
        if (!this.data.subjects[subject]) {
            this.data.subjects[subject] = { totalAttempts: 0, avgScore: 0, scores: [] };
        }

        const s = this.data.subjects[subject];
        s.totalAttempts++;
        s.scores.push(score);
        if (s.scores.length > 50) s.scores.shift();
        s.avgScore = s.scores.reduce((a, b) => a + b, 0) / s.scores.length;

        questions.forEach((q, idx) => {
            const isCorrect = userAnswers[idx] === q.ans;
            const qId = q.q;
            if (!this.data.failures[subject]) this.data.failures[subject] = {};
            if (!isCorrect && userAnswers[idx] !== null) {
                if (!this.data.failures[subject][qId]) {
                    this.data.failures[subject][qId] = { count: 0, text: q.q, unit: q.u, opts: q.opts, ans: q.ans, exp: q.exp };
                }
                this.data.failures[subject][qId].count++;
                this.data.failures[subject][qId].lastSeen = Date.now();
            } else if (isCorrect && this.data.failures[subject][qId]) {
                this.data.failures[subject][qId].count = Math.max(0, this.data.failures[subject][qId].count - 1);
                if (this.data.failures[subject][qId].count === 0) {
                    delete this.data.failures[subject][qId];
                }
            }
        });

        this.data.history.push({ date: Date.now(), subject, score, type, timeSpentSec: timeSpentSec || 0 });
        if (this.data.history.length > 100) this.data.history.shift();

        this.save();
    },

    // ── Sync email helpers ─────────────────────────────────────────
    setSyncEmail(email) {
        const clean = (email || '').trim().toLowerCase();
        if (!clean || !clean.includes('@')) return false;
        localStorage.setItem('er_sync_email', clean);
        return true;
    },
    getSyncEmail() {
        if (typeof currentUser === 'function') {
            const u = currentUser();
            if (u && u.email) return u.email;
        }
        return localStorage.getItem('er_sync_email') || null;
    },
    clearSyncEmail() {
        localStorage.removeItem('er_sync_email');
    },

    getReviewQuestions(count, subject) {
        if (!this.data.failures[subject]) return [];
        return Object.values(this.data.failures[subject])
            .filter(q => q.count > 0)
            .sort((a, b) => b.count - a.count)
            .slice(0, count)
            .map(f => ({ u: f.unit, q: f.text, opts: f.opts, ans: f.ans, exp: f.exp }));
    },

    getMostFailedTopics(subject) {
        if (!this.data.failures[subject]) return [];
        const units = {};
        Object.values(this.data.failures[subject]).forEach(f => {
            units[f.unit] = (units[f.unit] || 0) + f.count;
        });
        return Object.entries(units)
            .map(([name, count]) => ({ name, count }))
            .sort((a, b) => b.count - a.count);
    }
};

window.UserStats = UserStats;

// Al cargar: sincronizar desde la nube si hay sesión activa
// (api.js puede haberse cargado antes o después, esperamos un tick)
setTimeout(() => {
    UserStats.syncFromCloud().then(loaded => {
        if (loaded && typeof render === 'function') render();
    });
}, 100);
