const express = require('express');
const router = express.Router();
const path = require('path');

/* GET home page. */
router.get("/", async (req, res) => {
  res.render('bpm.jsx', { root: path.join(__dirname, '../views') });
})

module.exports = router;