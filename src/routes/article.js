const express = require('express');
const { articles } = require('../data/articles.json');
const router = express.Router();

router.get('/:id', (req, res) => {
  const id = +req.params.id;
  const article = articles[id];
  if (!article) return res.status(404).send('Not found');
  res.render('article', { title: article.title, article });
});

module.exports = router;
