// mobile-menu.js
(function() {
  const btn = document.getElementById('mobile-menu-btn');
  const nav = document.querySelector('.nav');
  btn.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  });
})();
