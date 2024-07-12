
const express = require('express');
const router = express.Router();

// GET settings page
router.get('/', (req, res) => {
  res.render('settings');
});

module.exports = router;