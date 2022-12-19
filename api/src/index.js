const express = require('express');

const app = express();
const http = require('http');

const port = process.env.PORT || '3000';
app.set('port', port);

app.use(express.json());

// IMPORT ROUTES
const homeRouter = require('../routes/home');

// API ROUTES
app.use('/', homeRouter);

// CREATE SERVER
var server = http.createServer(app);

// LISTEN ON PORT
server.listen(port, () => {
    console.log('listening on port: ' + port)
});

module.exports = app;