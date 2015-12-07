'use strict';

angular.module('homegymApp')
  .controller('RoutinesCtrl', function ($scope, $state, localStorageService, UserSrv)  {
    $scope.weekSelected = 0;
    $scope.userId = $state.params.id;
    $scope.weekSelected = 1;
    UserSrv.getUser($scope.userId, function (user) {
      $scope.user = user;
      localStorageService.set('user-info', $scope.user);
    });

    UserSrv.getRoutine($scope.userId, function (routine) {
      $scope.routine = routine;
      localStorageService.set('routine-info', $scope.routine);
      $scope.totalWeeks = $scope.routine.vectWeekMonth;
      var semana = 0;

      angular.forEach($scope.routine.data, function (element, index) {
        $scope.routine.data[index].number = String(semana + 1);
        semana ++;
      });
      
    });

    $scope.isWeekSelected = function (index) {
      // console.log("scope: " + $scope.weekSelected + " index: " + index);
      if($scope.weekSelected == $scope.routine.vectWeekMonth[index]) return (true)
      else return (false)

    }


    $scope.changeWeek = function (index){
      $scope.weekSelected = index+1;
    }
  });