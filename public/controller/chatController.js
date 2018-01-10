var app = angular.module('myApp')
  .controller('chatController', function($scope, $http, $state) {
    var socket = io.connect();
    var count = 0;
    var sessName;
    $http({
      method: 'get',
      url: '/checkSession'

    }).then(function(res) {

      console.log(res.data.name.name);
      sessName = res.data.name.name;
      $scope.user = 'Welcome  ' + sessName;
      socket.emit('new user', sessName, function() {

      });



    })

    //send messageArea
    $scope.send = function() {
      if ($scope.messages == '' || $scope.messages == null) {
        return false;
      }

      // get current time
      var dt = new Date();
      var ntime = dt.getHours() + ":" + dt.getMinutes();
      // append message with time
      $scope.messages = $scope.messages + " " + ntime;
      $scope.time = ntime;

      if (sessName == undefined || sessName == null) {
        $state.go('login');
      }
      // call event chat message socket io
      socket.emit('chat message', {
        username: sessName,
        msg: $scope.messages
      });
      $scope.messages = '';

    }
    //get old messages
      socket.on('old message', function(person) {
        document.getElementById('message').innerHTML = "";
          for (var i = 0; i < person.length; i++) {
            var li = document.createElement('li');
            li.appendChild(document.createTextNode(person[i].username + ': ' + person[i].msg));
            document.getElementById('message').appendChild(li);
          }
      })

    // get new message display
    socket.on('new message', function(data) {
      var li = document.createElement('li');
      li.appendChild(document.createTextNode(data.username + ': ' + data.msg));
      document.getElementById('message').appendChild(li);
    });

    //get user names and display
    socket.on('get users', function(data) {
      document.getElementById('activeUser').innerHTML = "";
      for (var i = 0; i < data.length; i++) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(data[i]));
        document.getElementById('activeUser').appendChild(li);
      }
    });



  })
