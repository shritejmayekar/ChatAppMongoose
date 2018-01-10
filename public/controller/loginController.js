var app = angular.module('myApp')

  .controller('loginController', function($scope, $state, $http, loginService) {
    var socket = io.connect();
    //check is already logged in or not
    $http({
      method: 'get',
      url: '/checkSession'

    }).then(function(res) {
      //console.log(res);
      console.log(res.data.data.isLogin);
      console.log(res.data);
      if (res.data.data.isLogin)
        $state.go('chat');
    })
    // login function
    $scope.Login = function() {
      if ($scope.name == "" || $scope.name == null || $scope.password == '' || $scope.password == null) {
        document.getElementById('flag').innerHTML = "<p style='color:red'>*Fields are blanks</p>"
        return false;
      }
      console.log($scope.name + " " + $scope.password);

      document.getElementById('flag').innerHTML = "";
      

      loginService.myFunction($scope.name, $scope.password).then(function(res) {
        if (res.data.message == "login success") {
          $state.go('chat');
        } else {
          document.getElementById('flag').innerHTML = "<p style='color:red'>name or password is wrong</p>"
        }
      })
    }
  })
