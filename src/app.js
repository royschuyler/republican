// app.js
const express        = require('express');
const cookieParser   = require('cookie-parser');
const expressLayouts = require('express-ejs-layouts');
const path           = require('path');
const indexRouter    = require('./routes/index');
const aboutRouter    = require('./routes/about');
const contactRouter  = require('./routes/contact');

const app = express();

// ─── 1️⃣ Parse cookies so we can read theme preference ───────────────────────
app.use(cookieParser());

// ─── 2️⃣ Enable express-ejs-layouts ───────────────────────────────────────────
app.use(expressLayouts);
app.set('layout', 'layout'); // default layout file: views/layout.ejs

// ─── 3️⃣ Configure EJS ────────────────────────────────────────────────────────
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// ─── 4️⃣ Expose `theme` to all templates ──────────────────────────────────────
//    This makes `<%= theme %>` available in layout.ejs
app.use((req, res, next) => {
  res.locals.theme = req.cookies.theme || 'light';
  next();
});

// ─── 5️⃣ Serve static assets ──────────────────────────────────────────────────
app.use(express.static(path.join(__dirname, 'public')));

// ─── 6️⃣ Mount your routes ───────────────────────────────────────────────────
app.use('/',      indexRouter);
app.use('/about',   aboutRouter);
app.use('/contact', contactRouter);

// ─── 7️⃣ Start the server ────────────────────────────────────────────────────
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`));

module.exports = app;
