'use strict';

angular.module('homegymApp')
  .controller('WeightDataCtrl', function ($scope, $state, localStorageService, WeightDataSrv) {

  	$scope.weightDataForm = {};

  	$scope.save = function () {
      if (!$scope.weightDataForm.$valid) {
      	$scope.submitted = true;
        return;
      }
      $scope.user.id = $state.params.id;
      WeightDataSrv.updateData($scope.user, function (data) {
          localStorageService.set('user', data);
          $state.go('site.dashboard', { id: $state.params.id });
      });
    }
      
  });