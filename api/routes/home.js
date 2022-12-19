const express = require('express');
const router = express.Router();
const connection = require('../database/connection.js')
/* GET home page. */
router.get("/", async (req, res) => {
  const selectUserQuery = 'SELECT * FROM users';

  connection.query(selectUserQuery, (err, results, fields) => {
    if (err) throw err;

    console.log('results:', results)
    res.send('Hello Widad !!!')
  });
})

module.exports = router;