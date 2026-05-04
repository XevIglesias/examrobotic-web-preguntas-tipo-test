(function () {
    try {
        var token = localStorage.getItem('token');
        var userStr = localStorage.getItem('user');
        if (!token || !userStr) { window.location.replace('../../index.html?open=buy'); return; }
        var u = JSON.parse(userStr);
        if (!u || !u.id) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            window.location.replace('../../index.html?open=buy');
        }
    } catch (e) {
        window.location.replace('../../index.html?open=buy');
    }
}());
