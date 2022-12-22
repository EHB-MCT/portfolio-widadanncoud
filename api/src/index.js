const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const http = require('http');

const port = process.env.PORT || '3000';
app.set('port', port);

app.use(express.json());
app.use(express.static(path.join(__dirname, '../views')));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
  }));

// IMPORT ROUTES
const indexRouter = require('../routes/index');
const bpmRouter = require('../routes/bpm');
const createBPM = require('../routes/crud/create-bpm');
const getAllBPM = require('../routes/crud/read-bpm');

// API ROUTES
app.use('/', indexRouter);
app.use('/bpm', bpmRouter);
app.use('/crud/create-bpm', createBPM);
app.use('/crud/read-bpm', getAllBPM);

// CREATE SERVER
var server = http.createServer(app);

// LISTEN ON PORT
server.listen(port, () => {
    console.log('listening on port: ' + port)
});

module.exports = app;