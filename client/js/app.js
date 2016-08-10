var app = angular.module('flapper', ['ui.router', 'ngMaterial']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: '/views/home.html',
        controller: 'mainCtrl'
    })
    .state('about', {
        url: '/about',
        templateUrl: '/about.html'
    });
    
    //  $urlRouterProvider.otherwise('home');
});