'use strict';

angular.module('homegymApp')
  .controller('WeightDataCtrl', function ($scope, $state, localStorageService) {

  	$scope.weightDataForm = {};

  	$scope.save = function () {
      if (!$scope.weightDataForm.$valid) {
        console.log('Error');
      	$scope.submitted = true;
        return;
      }

      console.log('user', $scope.user);

    	// RegisterSrv.createAccount($scope.user, function (data) {
    	// 	localStorageService.set('user', data);
    	// 	$state.go('weight-data');
    	// });
    }
			
  });