const express        = require('express');
const expressLayouts = require('express-ejs-layouts');
const path           = require('path');
const indexRouter    = require('./routes/index');
const aboutRouter    = require('./routes/about');
const contactRouter  = require('./routes/contact');

const app = express();

// 1️⃣ enable layouts
app.use(expressLayouts);
// 2️⃣ tell it your default layout file is views/layout.ejs
app.set('layout', 'layout');

// 3️⃣ now set up EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 4️⃣ static assets
app.use(express.static(path.join(__dirname, 'public')));

// 5️⃣ routes
app.use('/',      indexRouter);
app.use('/about',   aboutRouter);
app.use('/contact', contactRouter);

// 6️⃣ start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`));

module.exports = app;
