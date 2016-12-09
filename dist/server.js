'use strict';

var express = require('express');
var inventoryController = require('./controllers/inventoryController');
var app = express();

app.get('/inventory', function (req, res) {
  inventoryController(101).then(function (response) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.send(JSON.stringify(response));
  });
});

app.listen(8081, function () {
  console.log('listening.....');
});