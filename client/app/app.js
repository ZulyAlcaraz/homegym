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

/*
    ng-youtube-embed v0.2.2
    Copyright (c) 2015 Arun Michael Dsouza (amdsouza92@gmail.com)
    Licence: MIT
    Demo on CodePen - http://codepen.io/amdsouza92/pen/yNxyJV
*/
"use strict";angular.module("ngYoutubeEmbed",[]).directive("ngYoutubeEmbed",[function(){return{restrict:"E",template:'<div ng-bind-html="youtubeEmbedFrame"></div>',scope:{url:"=",autoplay:"@autoplay",autohide:"@autohide",ccloadpolicy:"@ccloadpolicy",color:"@color",controls:"@controls",disablekb:"@disablekb",end:"@end",fs:"@fs",hl:"@hl",ivloadpolicy:"@ivloadpolicy",playlist:"@playlist",playsinline:"@playsinline",rel:"@rel",showinfo:"@showinfo",start:"@start",theme:"@theme",width:"@width",height:"@height"},controller:["$scope","$sce",function(e,l){function t(e){var l=/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/,t=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/,o=(e.match(t),e.match(l));if(null!=o){var i=o[1];return i}}var o=e.url;if(void 0!=o){if(e.playlistArray=[],void 0!=e.playlist)for(var i=e.playlist.split(","),a=0;a<i.length;a++)e.playlistArray.push(t(i[a]));var r,s,h,u,c,d,n,p,y,b,f,m,w,v,g,E,k,A;r="true"==e.autoplay?1:0,s="true"==e.autohide?1:0,h="true"==e.ccloadpolicy?1:0,u="white"==e.color?"white":"red",c="false"==e.controls?0:1,d="false"==e.disablekb?0:1,n=e.end,p="false"==e.fs?0:1,y=e.hl,b="false"==e.ivloadpolicy?0:1,f=e.playlistArray,m="true"==e.playsinline?1:0,w="false"==e.rel?0:1,v="false"==e.showinfo?0:1,g=e.start,E=e.theme,k=void 0!=e.width?e.width:"500px",A=void 0!=e.height?e.height:"350px";var $=t(o),x="<iframe width="+k+" height="+A+' src="https://www.youtube.com/embed/'+$+"?autoplay="+r+"&autohide="+s+"&cc_load_policy="+h+"&color="+u+"&controls="+c+"&disablekb="+d+"&end="+n+"&fs="+p+"&hl="+y+"&playlist="+f+"&playsinline="+m+"&rel="+w+"&showinfo="+v+"&start="+g+"&theme="+E+'" frameborder="0" allowfullscreen></iframe>';e.youtubeEmbedFrame=l.trustAsHtml(x)}}]}}]);