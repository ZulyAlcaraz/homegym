'use strict';

angular.module('homegymApp')
  .controller('RoutinesCtrl', function ($scope, $rootScope, $state, localStorageService, UserSrv)  {
    $scope.weekSelected = 0;
    $scope.userId = $state.params.id;
    $scope.weekSelected = 1;
    $scope.actualDate = new Date();

    UserSrv.getUser($scope.userId, function (user) {
      $scope.user = user;
      localStorageService.set('user-info', $scope.user);
    });

    UserSrv.getRoutine($scope.userId, function (routine) {
      $scope.routine = routine;
      $scope.totalWeeks = $scope.routine.vectWeekMonth;
      var semana = 0;

      angular.forEach($scope.routine.data, function (element, index) {
        $scope.routine.data[index].number = String(semana + 1);
        semana ++;
      });

      localStorageService.set('routine-info', $scope.routine);
    });

    $scope.isWeekSelected = function (index) {
      if($scope.weekSelected == $scope.routine.vectWeekMonth[index]) return (true)
      else return (false)
    };

    $scope.changeWeek = function (index){
      $scope.weekSelected = index+1;
    };

    $scope.goToRoutine =  function (routine, week) {
      routine.week = parseInt(week) + 1;
      localStorageService.set('detail-routine-info', routine);
      $state.go('site.detail-routine', {id: $scope.userId});
    };

  });