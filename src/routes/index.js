/* src/routes/index.js */
const express = require('express');
const router  = express.Router();
// load test data from JSON
const { articles } = require('../data/articles.json');

router.get('/', (req, res) => {
  // only title, date, and body will be displayed in the view
  res.render('index', { title: 'Home', articles });
});

module.exports = router;