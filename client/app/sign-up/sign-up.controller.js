'use strict';

angular.module('homegymApp')
  .controller('SignUpCtrl', function ($scope, $state, RegisterSrv, localStorageService) {

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
        console.log('data', data);
    		localStorageService.set('uid', data);
    		$state.go('weight-data', { id: data.uid });
      });
    }
			
  });