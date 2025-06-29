(function() {
  const btn = document.getElementById('theme-toggle');
  const userPref = localStorage.getItem('theme');
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const current = userPref || (systemDark ? 'dark' : 'light');
  document.body.classList.toggle('dark', current === 'dark');

  btn.addEventListener('click', () => {
    const next = document.body.classList.toggle('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', next);
  });
})();