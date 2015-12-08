'use strict';

angular.module('homegymApp')
  .controller('RoutinesDetailCtrl', function ($scope, $rootScope, $state, localStorageService, UserSrv)  {
    $scope.routine = localStorageService.get('detail-routine-info');
    $scope.routines = localStorageService.get('routine-info')
    $scope.actualDate = new Date();
    $scope.link = 'https://www.youtube.com/watch?v=diFjQVUL7wk';
    console.log(' $scope.routines',  $scope.routines);
  });