'use strict';

angular.module('homegymApp')
  .controller('RoutinesDetailCtrl', function ($scope, $rootScope, $state, localStorageService, UserSrv)  {
    $scope.routine = localStorageService.get('detail-routine-info');
    $scope.routines = localStorageService.get('routine-info');
    $scope.actualDate = new Date();

    $scope.changeRoutine = function (newRoutine, week) {
    	newRoutine.week = parseInt(week);
    	localStorageService.set('detail-routine-info', newRoutine);
    	$state.reload();
    };
  });