var app = angular.module('myApp');
app.service('loginService',function($http) {
  this.myFunction =function(name,password) {
    return $http({
      method:'POST',
      url:'/signin',
      data:{
        name:name,
        password:password
      }
    })
  }
});

app.service('registerService',function($http) {
  this.registerFunction = function(name,password,email) {
    return $http({
      method:'POST',
      url:'/signup',
      data:{
        name:name,
        password:password,
        email:email
      }
    })
  }
});
