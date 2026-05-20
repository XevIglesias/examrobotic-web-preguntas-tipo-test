
function toggleTheme() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    
    if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    
    localStorage.setItem('theme', newTheme);
    
    // Update button icon if exists
    const btn = document.getElementById('theme-toggle-btn');
    if (btn) {
        btn.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    }
}

// Initial load
(function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.documentElement.classList.add('dark');
    }
})();
