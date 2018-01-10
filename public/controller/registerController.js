var app = angular.module('myApp')
app.controller('registerController', function($scope, $state, registerService) {
//register function
  $scope.Register = function() {
    if ($scope.name == "" || $scope.name == null || $scope.password == '' || $scope.password == null || $scope.email == "" || $scope.email == null) {
      document.getElementById('flag').innerHTML = "<p style='color:red'>*Fields are blanks</p>"
      return false;
    }
    document.getElementById('flag').innerHTML = "";
    registerService.registerFunction($scope.name, $scope.password, $scope.email).then(function(res) {
      if (res.data.message == 'register success') {
        document.getElementById('flag1').innerHTML = "<p style='color:green'>Registration Success</p>";
        $state.go('login')
      } else {
        document.getElementById('flag').innerHTML = "<p style='color:red'>Registration Failed</p>";

      }
    })



  }
})
