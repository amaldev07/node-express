var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/testApi', function (req, res) {
  res.send({name : 'dev ssss'});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});