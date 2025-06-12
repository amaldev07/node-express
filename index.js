var express = require('express');
var app = express();
app.use(express.json());
// const session = require('express-session');
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/testApi', function (req, res) {
  res.send({ name: 'dev ssss' });
});

/* This is for redirecting from webapp using post */
app.post('/api/receive-tin', (req, res) => {
  console.log("HIIII");
  const tin = req.body.tin;
  console.log("HIIII" + tin); // Log 123
  // Option 1: Store in session/cookie
  // Option 2: Store in DB and generate a one-time token (for extra security)
  // Now, redirect to the Angular app
  let j = [{ name: 'google' }, { name: 'microsoft' }]
  res.redirect('http://localhost:4200/home' + '?parties=' + JSON.stringify(j));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});