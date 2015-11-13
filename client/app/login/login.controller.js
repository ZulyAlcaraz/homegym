'use strict';

angular.module('homegymApp')
  .controller('LoginCtrl', function ($scope, $state, localStorageService, LoginSrv) {

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
    		localStorageService.set('user', data);
    		$state.go('dashboard', { id: data.uid });    		
      });
  	}

  });
