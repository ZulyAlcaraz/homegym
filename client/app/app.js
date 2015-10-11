'use strict';

angular.module('homegymApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ngMaterial'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('home', {
        url: '/',
        views: {
          'content@': {
            templateUrl: 'app/main/main.html',
            // controller: 'MainCtrl'
          }
        }
      })
      .state('panel', {
        abstract: true,
        views: {
          'navbar@': {
            templateUrl: 'components/navbar/navbar.html'
          }
        }
      })
      .state('sign-up', {
        parent: 'panel',
        url: '/sign-up',
        views: {
          'content@': {
            templateUrl: 'app/sign-up/sign-up.html'
            // controller: 'SignUpController'
          }
        }
      })
      ;

  });
