// src/routes/index.js
const express = require('express');
const router  = express.Router();

// This file should live at src/routes/index.js
// It handles the home page and renders index.ejs with articles
router.get('/', (req, res) => {
  // TODO: Replace with real data fetching
  const articles = [
    { title: 'First Article',  body: 'This is the first article.'  },
    { title: 'Second Article', body: 'This is the second article.' }
  ];
  res.render('index', { title: 'Home', articles });
});

module.exports = router;