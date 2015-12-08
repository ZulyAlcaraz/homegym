'use strict';

angular.module('homegymApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ngMaterial',
  'angular-svg-round-progress',
  'LocalStorageModule',
  'ngYoutubeEmbed'
])

  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$mdThemingProvider', 'localStorageServiceProvider', 
    function ($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider, localStorageServiceProvider) {
      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true);
      localStorageServiceProvider
        .setPrefix('homegymApp')
        .setStorageType('sessionStorage');

      $mdThemingProvider.theme('default')
        .accentPalette('lime', {
          'default': '50'
        });

      $stateProvider
        .state('site', {
          'abstract': true,
          resolve: {
            authorize: ['authorization',
              function(authorization) {
                return authorization.authorize();
              }
            ]
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
        .state('site.home', {
          parent: 'header',
          data: {
            roles: []
          },
          url: '/',
          views: {
            'content@': {
              templateUrl: 'app/main/main.html',
              controller: 'MainCtrl'
            }
          }
        })
        .state('site.sign-up', {
          parent: 'header',
          data: {
            roles: []
          },
          url: '/sign-up',
          views: {
            'content@': {
              templateUrl: 'app/sign-up/sign-up.html',
              controller: 'SignUpCtrl'
            }
          }
        })
        .state('site.login', {
          parent: 'header',
          data: {
            roles: []
          },
          url: '/login',
          views: {
            'content@': {
              templateUrl: 'app/login/login.html',
              controller: 'LoginCtrl'
            }
          }
        })
        .state('site.weight-data', {
          parent: 'header',
          data: {
            roles: ['User']
          },
          url: '/weight-data/:id',
          views: {
            'content@': {
              templateUrl: 'app/weight-data/weight-data.html',
              controller: 'WeightDataCtrl'
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
        .state('site.dashboard', {
          parent: 'panel',
          data: {
            roles: ['User']
          },
          url: '/dashboard/status/:id',
          views: {
            'content@': {
              templateUrl: 'app/dashboard/dashboard.html',
              controller: 'DashboardCtrl'
            }
          }
        })
        .state('site.routines', {
          parent: 'panel',
          data: {
            roles: ['User']
          },
          url: '/dashboard/routines/:id',
          views: {
            'content@': {
              templateUrl: 'app/routines/routines.html',
              controller: 'RoutinesCtrl'
            }
          }
        })
        .state('site.detail-routine', {
          parent: 'panel',
          data: {
            roles: ['User']
          },
          url: '/dashboard/routines/:id/detail-routine',
          views: {
            'content@': {
              templateUrl: 'app/routines/detail-routine/detail-routine.html',
              controller: 'RoutinesDetailCtrl'
            }
          }
        })
        .state('site.diet', {
          parent: 'panel',
          data: {
            roles: ['User']
          },
          url: '/dashboard/diet',
          views: {
            'content@': {
              templateUrl: 'app/diet/diet.html'
              // controller: 'DietController'
            }
          }
        });
    }
  ])

  .run(['$rootScope', '$state', '$stateParams', 'authorization', 'Principal', 'LoginSrv', 'localStorageService', '$q',
    function($rootScope, $state, $stateParams, authorization, Principal, LoginSrv, localStorageService, $q) {
      
      $rootScope.$on('$stateChangeStart', function(event, toState, toStateParams, fromState) {
        $rootScope.toState = toState;
        $rootScope.toStateParams = toStateParams;

        if (localStorageService.get('user-auth')) {
          $rootScope.userId = localStorageService.get('user-auth').uid;
        }

        if (Principal.isIdentityResolved()) {
          authorization.authorize();
        }
      });

      $rootScope.logout = function () {
        LoginSrv.logout(function (data) {
          localStorageService.clearAll();
          sessionStorage.clear();
          $q.defer().resolve();
          $state.transitionTo('site.login', {}, {
            reload: true,
            inherit: false,
            notify: true
          });
        });
      };
    }
  ])

  .factory('authorization', ['$rootScope', '$state', 'Principal',
    function($rootScope, $state, Principal) {
      return {
        authorize: function(force) {

          return Principal.identity(force).then(function() {
            var isAuthenticated = Principal.isAuthenticated();
            if ($rootScope.toState.data.roles && $rootScope.toState.data.roles.length > 0 && !Principal.isInAnyRole($rootScope.toState.data.roles)) {
              if (isAuthenticated) {
                $state.go('login');
              } else {
                $rootScope.returnToState = $rootScope.toState;
                $rootScope.returnToStateParams = $rootScope.toStateParams;
                $rootScope.isLoginActived = true;
                $state.go('login');
              }
            }
          });

        }
      };
    }
    ])

  .factory('Principal', ['$q', '$http', '$timeout',
    function($q, $http, $timeout) {
      var _identity = undefined,
      _authenticated = false;

      return {
        isIdentityResolved: function() {
          return angular.isDefined(_identity);
        },
        isAuthenticated: function() {
          return _authenticated;
        },
        isInRole: function (role) {
          if (!_authenticated || !_identity.roles) return false;

          return _identity.roles.indexOf(role) != -1;
        },
        isInAnyRole: function (roles) {
          if (!_authenticated || !_identity.roles) return false;

          for (var i = 0; i < roles.length; i++) {
            if (this.isInRole(roles[i])) return true;
          }

          return false;
        },
        authenticate: function (identity) {
          _identity = identity;
          _authenticated = identity != null;

          if (identity) sessionStorage.setItem("identity", angular.toJson(identity));
          else sessionStorage.removeItem("identity");
        },
        identity: function (force) {
          var deferred = $q.defer();

          if (force === true) _identity = undefined;

          if (angular.isDefined(_identity)) {
            deferred.resolve(_identity);

            return deferred.promise;
          }


          var self = this;
          $timeout(function() {
            _identity = angular.fromJson(sessionStorage.getItem("identity"));
              self.authenticate(_identity);
              deferred.resolve(_identity);
            }, 1000);

          return deferred.promise;
        }
      };
    }
  ]);