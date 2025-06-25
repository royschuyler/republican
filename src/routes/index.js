const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // Dummy article data—later you can pull from a JSON file or database
const articles = [
  {
    headline: "The Eagle Soars on Capitol Hill",
    preview:  "In a resounding display of unity, bi-partisan lawmakers gathered beneath the marble dome…",
    more:     "In front of a packed gallery, the chamber echoed with pledges of fiscal responsibility…"
  }
  // , add more articles here if you want
];
  res.render('index', { articles });
});

module.exports = router;
