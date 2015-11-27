'use strict';

angular.module('homegymApp')
  .controller('WeightDataCtrl', function ($scope, $state, localStorageService, WeightDataSrv) {

  	$scope.weightDataForm = {};

  	$scope.save = function () {
      if (!$scope.weightDataForm.$valid) {
        console.log('Error');
      	$scope.submitted = true;
        return;
      }
      $scope.user.id = $state.params.id;
      console.log('user', $scope.user);
      WeightDataSrv.updateData($scope.user, function (data) {
          localStorageService.set('user', data);
          $state.go('dashboard', { id: $state.params.id });
      });
    	// RegisterSrv.createAccount($scope.user, function (data) {
    	// 	localStorageService.set('user', data);
    	// 	$state.go('weight-data');
    	// });
    }
			
  });