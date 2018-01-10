//Declare socket
var users = [];
var socketId = [];
var clients;
var person=0;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');
var session = require('express-session');
var model = require('./model');
var UserModel = model.UserModel;
var MessageModel = model.MessageModel;
app.use(express.static('public'));
//app.use(session({ secret: 'phantom'}));
app.use(session({
  secret: 'keyboard cat',
  cookie: {
    maxAge: 60000
  },
  resave: false,
  saveUninitialized: true
}));
app.use(bodyParser.json());
require('./route/routes.js')(app);

//old messages
function oldMsg() {
  MessageModel.find({}, function(err, data) {
  if (err) throw err;
  person = JSON.parse(JSON.stringify(data));
  // object of all the users
  //console.log(person);
  //console.log(person[1].username);
  //console.log(person);
})
}

//create socket


io.on('connection', function(socket) {
  clients++;
  console.log('Clients connected:' + clients);
  console.log(socket.id);



  // send message
  socketId.push(socket.id);
  socket.on('chat message', function(data) {

    var newMsg = MessageModel();
    newMsg.username = data.username;
    newMsg.msg = data.msg;
    newMsg.save();
    // broadcast message to clients/users
    io.emit('new message', data);
  });

  //Disconnect
  socket.on('disconnect', function(socket) {
    clients--;

    users.splice(users.indexOf(socket), 1);
    console.log(socket.newUser);
    console.log("user is disconnected");
    console.log('Clients connected:' + clients);
    updateUsernames();
  });
  //new user
  socket.on('new user', function(data, callback) {
    callback(true);
    socket.newUser = data;
    if (users.indexOf(socket.newUser) < 0) {
      users.push(socket.newUser);
      updateUsernames();


    }
    updateUsernames();
  });
  // updates user name based on connected and disconnected
  function updateUsernames() {
    //broadcast the username to all
    io.emit('get users', users);
  }
  oldMsg();
  io.emit('old message',person);





});

http.listen(3000, function() {
  console.log('listening 3000:');
})
