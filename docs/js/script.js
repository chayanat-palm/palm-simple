function toggleTheme() {
    const body = document.body;
    const btn = document.getElementById('theme-btn');
    const currentTheme = body.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        body.setAttribute('data-theme', 'light');
        btn.textContent = '☀️';
    } else {
        body.setAttribute('data-theme', 'dark');
        btn.textContent = '🌙';
    }
}
