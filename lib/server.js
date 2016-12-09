const express = require('express');
const inventoryController = require('./controllers/inventoryController');
const app = express();

app.get('/inventory', (req, res) => {
  inventoryController(101).then((response) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.send(JSON.stringify(response));
  });
});

app.listen(8081, () => {
  console.log('listening.....');
});
