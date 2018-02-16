var app = angular.module('myApp')
  .controller('loginController', function($scope, $state, loginService) {

    $scope.Login = function() {
      if ($scope.name == "" || $scope.name == null || $scope.password == '' || $scope.password == null) {
        document.getElementById('flag').innerHTML = "<p style='color:red'>*Fields are blanks</p>"
        return false;
      }
      console.log($scope.name + " " + $scope.password);
      document.getElementById('flag').innerHTML ="";
      //  $state.go('chat');
      loginService.myFunction($scope.name, $scope.password).then(function(res) {
        if (res.data.message == "login success")
          $state.go('chat');
        else {
          document.getElementById('flag').innerHTML = "<p style='color:red'>name or password is wrong</p>"
        }
      })
    }
  })
