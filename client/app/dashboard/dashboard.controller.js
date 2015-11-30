'use strict';

angular.module('homegymApp')
  .controller('DashboardCtrl', function ($scope, $state, localStorageService, UserSrv) {
    $scope.userId = $state.params.id;

    console.log('$scope.userId',   $scope.userId);
    $scope.user = localStorageService.get('user-info');
    $scope.routine = localStorageService.get('routine-info');
    console.log('$scope.user',   $scope.user);

    UserSrv.getUser($scope.userId, function (user) {
      $scope.user = user;
      console.log('$scope.user',   $scope.user);
      localStorageService.set('user-info', $scope.user);
    });

    UserSrv.getRoutine($scope.userId, function (routine) {
      $scope.routine = routine;
      localStorageService.set('routine-info', $scope.routine);
    });

    $scope.calcPercentage = function(){
      return $scope.routine.data[49].day[30].percentage;
    }


   

  });