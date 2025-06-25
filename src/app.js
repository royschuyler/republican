const express = require('express');
const path    = require('path');

const app = express();

// point Express at your views folder
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));       // where your .ejs files live
app.set('view engine', 'ejs');                         // use the EJS engine

// (then your static middleware, body-parsers, etc.)

const indexRouter   = require('./routes/index');
const aboutRouter   = require('./routes/about');
const contactRouter = require('./routes/contact');

app.use('/',      indexRouter);
app.use('/about',   aboutRouter);
app.use('/contact', contactRouter);

// finally start listening
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server up on http://localhost:${PORT}`));

module.exports = app;