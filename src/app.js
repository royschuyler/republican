// src/app.js
const express        = require('express');
const cookieParser   = require('cookie-parser');
const expressLayouts = require('express-ejs-layouts');
const path           = require('path');

const app = express();

// ─── Load your articles JSON ─────────────────────────────────────────────────
const { articles } = require(path.join(__dirname, 'data', 'articles.json'));

// ─── 1️⃣ Parse cookies so we can read theme preference ───────────────────────
app.use(cookieParser());

// ─── 2️⃣ Enable express-ejs-layouts ───────────────────────────────────────────
app.use(expressLayouts);
app.set('layout', 'layout'); // looks for views/layout.ejs

// ─── 3️⃣ Configure EJS ────────────────────────────────────────────────────────
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// ─── 4️⃣ Expose `theme` & `articles` to all templates ─────────────────────────
app.use((req, res, next) => {
  res.locals.theme    = req.cookies.theme || 'light';
  res.locals.articles = articles;
  next();
});

// ─── 5️⃣ Serve static assets & JSON ───────────────────────────────────────────
app.use(express.static(path.join(__dirname, 'public')));
app.use('/data', express.static(path.join(__dirname, 'data')));

// ─── 6️⃣ Define your routes inline ────────────────────────────────────────────
// Home page (lists all articles)
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

// About & Contact
app.get('/about',   (req, res) => res.render('about',   { title: 'About'   }));
app.get('/contact', (req, res) => res.render('contact', { title: 'Contact' }));

// Article detail pages
app.get('/article/:id', (req, res) => {
  const id = Number(req.params.id);
  const article = articles[id];
  if (!article) {
    return res.status(404).render('404', { title: 'Not Found' });
  }
  res.render('article', {
    title:   article.title,
    article
  });
});

// ─── 7️⃣ Start the server ────────────────────────────────────────────────────
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`));

module.exports = app;
