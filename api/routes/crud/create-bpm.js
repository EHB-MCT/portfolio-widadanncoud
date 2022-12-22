const express = require('express');
const router = express.Router();
const connection = require('../../database/connection');

router.post("/", async (req, res) => {
    const {quantity, date, time, message} = req.body
    const query = 'INSERT INTO bpm (`quantity`, `date`, `time`, `message`) VALUES (?,?,?,?)'

    connection.query(query, [quantity, date, time, message],

    (error, results) => {
     if (error) return res.send(`error: ${error}`);
        console.log('results:', results)
        res.send(`A BPM of ${quantity} is created with description ${message}`);
     });
})
  
module.exports = router;