document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('ticker-inner');
  fetch('/data/articles.json')
    .then(res => res.json())
    .then(data => {
      const items = data.articles.map((a, i) => {
        // assume you’ll add an article page at /article/:i
        return `<a href="/article/${i}">${a.title}</a>`;
      }).join(`<span class="breaking-news">BREAKING NEWS</span>`);
      container.innerHTML = items;
    })
    .catch(err => console.error('Ticker load failed', err));
});
