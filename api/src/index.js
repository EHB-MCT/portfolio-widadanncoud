const express = require('express');
const path = require('path');

const app = express();
const http = require('http');

const port = process.env.PORT || '3000';
app.set('port', port);

app.use(express.json());
app.use(express.static(path.join(__dirname, '../views')));

// IMPORT ROUTES
const homeRouter = require('../routes');

// API ROUTES
app.use('/', homeRouter);

// CREATE SERVER
var server = http.createServer(app);

// LISTEN ON PORT
server.listen(port, () => {
    console.log('listening on port: ' + port)
});

module.exports = app;