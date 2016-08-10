var app = angular.module('flapper', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: 'home.html'
    })
    .state('about', {
        url: '/about',
        templateUrl: 'about.html'
    });
    
     $urlRouterProvider.otherwise('home');
});