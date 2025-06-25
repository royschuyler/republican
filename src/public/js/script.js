// toggles article expansion/collapse
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.read-more-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var body = this.previousElementSibling;
      if (body.classList.contains('expanded')) {
        body.classList.remove('expanded');
        this.textContent = 'Read More';
      } else {
        body.classList.add('expanded');
        this.textContent = 'Collapse';
      }
    });
  });
});