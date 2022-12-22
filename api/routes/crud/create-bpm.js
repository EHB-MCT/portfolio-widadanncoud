const express = require('express');
const router = express.Router();
const connection = require('../../database/connection');

/* GET home page. */
router.post("/", async (req, res) => {
    const {quantity, date, time, message} = req.body

    connection.query('INSERT INTO bpm (`quantity`, `date`, `time`, `message`) VALUES (?,?,?,?)', [quantity, date, time, message],
    (error, results) => {
     if (error) return res.json({ error: error });
        console.log('results:', results)
     });
    
    res.send(`A BPM of ${quantity} is created`);
})
  
module.exports = router;