var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var session = require('express-session');
app.use(express.static('public'));
app.use(bodyParser.json());
require('./route/routes.js')(app);

http.listen(3000, function() {
  console.log('listening 3000:');
})
