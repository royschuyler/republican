// src/routes/contact.js
const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;