const express = require('express');
const router = express.Router();
const path = require('path');

/* GET home page. */
router.post("/", async (req, res) => {
    console.log(req.body)
    res.send("BPM is created")
})
  
module.exports = router;