document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.article-card').forEach(card => {
    const btn = card.querySelector('.toggle-btn');
    const excerpt = card.querySelector('.excerpt');
    const full = card.querySelector('.full');

    btn.addEventListener('click', () => {
      const isExpanded = full.style.display === 'block';
      full.style.display = isExpanded ? 'none' : 'block';
      excerpt.style.display = isExpanded ? 'block' : 'none';
      btn.textContent = isExpanded ? 'Read more' : 'Collapse';
    });
  });
});