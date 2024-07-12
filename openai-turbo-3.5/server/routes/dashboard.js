const express = require('express');
const router = express.Router();

// GET dashboard page
router.get('/', (req, res) => {
  res.render('dashboard');
});

module.exports = router;