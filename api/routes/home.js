const express = require('express');
const router = express.Router();
/* GET home page. */
router.get("/", async (req, res) => {
  res.send('Hello Widad !!!')
})

module.exports = router;