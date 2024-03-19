var express = require('express');
var bodyParser = require('body-parser');


var items = require('../database-mongo');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

// Get all items in the db
app.get('/items', function (req, res) {
  // items.selectAll(function(err, data) {
  //   if(err) {
  //     res.sendStatus(500);
  //   } else {
  //     res.json(data);
  //   }
  // });
  console.log('not implemented yet')
});

// Get one item
// app.get('/items:id', function(req, res) {

// })

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

