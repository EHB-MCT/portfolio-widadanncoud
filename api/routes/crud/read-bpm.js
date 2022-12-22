const express = require('express');
const router = express.Router();
const connection = require('../../database/connection');

router.post("/", async (req, res) => {
   const query = 'SELECT * FROM bpm WHERE 1';

   connection.query(query, function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      res.json(result)
   });
})
  
module.exports = router;