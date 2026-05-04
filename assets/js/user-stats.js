// ExamRobotic User Statistics & Persistence Engine
const UserStats = {
    data: JSON.parse(localStorage.getItem('er_stats')) || {
        subjects: {},
        failures: {}, // { subjectSlug: { qId: { count: 0, lastSeen: 0, text: '', unit: '' } } }
        history: []
    },

    save() {
        localStorage.setItem('er_stats', JSON.stringify(this.data));
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

        // Record failures
        questions.forEach((q, idx) => {
            const isCorrect = userAnswers[idx] === q.ans;
            const qId = q.q; // Use question text as unique ID for simplicity if no ID exists

            if (!this.data.failures[subject]) this.data.failures[subject] = {};
            
            if (!isCorrect && userAnswers[idx] !== null) {
                if (!this.data.failures[subject][qId]) {
                    this.data.failures[subject][qId] = { count: 0, text: q.q, unit: q.u, opts: q.opts, ans: q.ans, exp: q.exp };
                }
                this.data.failures[subject][qId].count++;
                this.data.failures[subject][qId].lastSeen = Date.now();
            } else if (isCorrect) {
                // If they get it right, we could decrease the weight or remove it
                if (this.data.failures[subject][qId]) {
                    this.data.failures[subject][qId].count = Math.max(0, this.data.failures[subject][qId].count - 1);
                    if (this.data.failures[subject][qId].count === 0) {
                        delete this.data.failures[subject][qId];
                    }
                }
            }
        });

        this.data.history.push({ date: Date.now(), subject, score, type, timeSpentSec: timeSpentSec || 0 });
        if (this.data.history.length > 100) this.data.history.shift();
        
        this.save();
    },

    getReviewQuestions(count, subject) {
        if (!this.data.failures[subject]) return [];
        
        const failedArr = Object.values(this.data.failures[subject])
            .filter(q => q.count > 0)
            .sort((a, b) => b.count - a.count); // Most failed first
            
        return failedArr.slice(0, count).map(f => ({
            u: f.unit,
            q: f.text,
            opts: f.opts,
            ans: f.ans,
            exp: f.exp
        }));
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
