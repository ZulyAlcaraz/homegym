'use strict';

angular.module('homegymApp', [

  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ngMaterial',
  'angular-svg-round-progress'

])

  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);

    $mdThemingProvider.theme('default')
      .accentPalette('lime', {
        'default': '50'
      });

    $stateProvider
      .state('header', {
        abstract: true,
        views: {
          'header@': {
            templateUrl: 'components/header/header.html'
          }
        }
      })
      .state('home', {
        parent: 'header',
        url: '/',
        views: {
          'content@': {
            templateUrl: 'app/main/main.html',
            controller: 'MainCtrl'
          }
        }
      })
      .state('sign-up', {
        parent: 'header',
        url: '/sign-up',
        views: {
          'content@': {
            templateUrl: 'app/sign-up/sign-up.html',
            controller: 'SignUpCtrl'
          }
        }
      })
      .state('login', {
        parent: 'header',
        url: '/login',
        views: {
          'content@': {
            templateUrl: 'app/login/login.html',
            controller: 'LoginCtrl'
          }
        }
      })
      .state('weight-data', {
        parent: 'header',
        url: '/weight-data',
        views: {
          'content@': {
            templateUrl: 'app/weight-data/weight-data.html'
            // controller: 'WeightDataController'
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
        url: '/dashboard/status',
        views: {
          'content@': {
            templateUrl: 'app/dashboard/dashboard.html'
           // controller: 'DashboardController'
          }
        }
      })
      .state('routines', {
        parent: 'panel',
        url: '/dashboard/routines',
        views: {
          'content@': {
            templateUrl: 'app/routines/routines.html'
            // controller: 'RoutinesController'
          }
        }
      })
      .state('detail-routine', {
        parent: 'panel',
        url: '/dashboard/routines/detail-routine',
        views: {
          'content@': {
            templateUrl: 'app/routines/detail-routine/detail-routine.html'
            // controller: 'RoutinesDetailController'
          }
        }
      })
      .state('diet', {
        parent: 'panel',
        url: '/dashboard/diet',
        views: {
          'content@': {
            templateUrl: 'app/diet/diet.html'
            // controller: 'DietController'
          }
        }
      });


  });
