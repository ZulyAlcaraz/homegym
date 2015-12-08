'use strict';

angular.module('homegymApp')
  .controller('SignUpCtrl', function ($scope, $state, RegisterSrv, localStorageService, $location) {

  	$scope.signUpForm = {};

  	$scope.register = function () {
      if (!$scope.signUpForm.$valid) {
      	$scope.submitted = true;
        return;
      }

    	RegisterSrv.createAccount($scope.user, function (data) {
        if (data.error) {
          $scope.messageError = data.error;
          return;
        }
    		localStorageService.set('user-auth', data);
    		$state.go('site.weight-data', { id: data.uid });
      });
    }
			
  });