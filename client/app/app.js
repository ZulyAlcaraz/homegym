'use strict';

angular.module('homegymApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ngMaterial'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);

    $mdThemingProvider.theme('default')
      .accentPalette('lime', {
        'default': '50'
      });

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
      .state('header', {
        abstract: true,
        views: {
          'header@': {
            templateUrl: 'components/header/header.html'
          }
        }
      })
      .state('sign-up', {
        parent: 'header',
        url: '/sign-up',
        views: {
          'content@': {
            templateUrl: 'app/sign-up/sign-up.html'
            // controller: 'SignUpController'
          }
        }
      })
      .state('weight-data', {
        parent: 'header',
        url: '/weight-data',
        views: {
          'content@': {
            templateUrl: 'app/weight-data/weight-data.html'
            // controller: 'SignUpController'
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
      .state('dashboard', {
        parent: 'panel',
        url: '/dashboard',
        views: {
          'content@': {
            templateUrl: 'app/dashboard/dashboard.html'
            // controller: 'SignUpController'
          }
        }
      });


  });
