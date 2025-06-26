/* public/js/script.js */
// ensure this script is included in layout before closing </body>
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.read-more-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const body = btn.previousElementSibling;
      if (body.classList.contains('expanded')) {
        body.classList.remove('expanded');
        btn.textContent = 'Read More';
      } else {
        body.classList.add('expanded');
        btn.textContent = 'Collapse';
      }
    });
  });
});
