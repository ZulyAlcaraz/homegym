'use strict';

angular.module('homegymApp')
  .controller('LoginCtrl', function ($scope, $state, localStorageService, LoginSrv, $location, Principal) {

  	$scope.loginForm = {};

  	$scope.login = function () {
  		if (!$scope.loginForm.$valid) {
      	$scope.submitted = true;
        return;
      }


    	LoginSrv.login($scope.user, function (data) {
        if (data.error) {
          $scope.messageError = data.error;
          return;
        }
        var user = angular.merge({}, data, {
          roles: ['User']
        });
        Principal.authenticate(user);
    		localStorageService.set('user', data);
    		$state.go('site.dashboard', { id: data.uid });    		
      });
  	}

  });
