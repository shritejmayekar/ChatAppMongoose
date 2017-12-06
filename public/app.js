var app = angular.module('myApp',['ui.router']);
app.config(function($stateProvider,$urlRouterProvider) {
  $stateProvider
      .state('login',{
        url:'/login',
        templateUrl:'template/login.html',
        controller:'loginController'
      })
      .state('chat',{
        url:'/chat',
        templateUrl:'template/chat.html',
        controller:'chatController'
      })
      .state('register',{
        url:'/register',
        templateUrl:'template/register.html',
        controller:'registerController'
      });
  $urlRouterProvider.otherwise('/login');

});
