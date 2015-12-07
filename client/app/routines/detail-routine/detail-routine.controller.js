'use strict';

angular.module('homegymApp')
  .controller('RoutinesDetailCtrl', function ($scope, $rootScope, $state, localStorageService, UserSrv)  {
    $scope.routine = $rootScope.detailRoutine;
    console.log('Routine', $scope.routine);
  });