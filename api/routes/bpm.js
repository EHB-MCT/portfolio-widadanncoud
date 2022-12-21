const express = require('express');
const router = express.Router();
const path = require('path');

/* GET home page. */
router.get("/", async (req, res) => {
  res.sendFile('bpm.html', { root: path.join(__dirname, '../views') });
})

module.exports = router;