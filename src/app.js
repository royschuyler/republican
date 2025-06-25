const express = require('express');
const path    = require('path');
const app     = express();

// 1️⃣ Serve your public folder
app.use(express.static(path.join(__dirname, 'public')));

// 2️⃣ Then your view engine and routes
app.set('views',  path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
const indexRouter = require('./routes/index');
app.use('/', indexRouter);
// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
