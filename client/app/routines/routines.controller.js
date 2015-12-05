'use strict';

angular.module('homegymApp')
  .controller('RoutinesCtrl', function ($scope, $state, localStorageService, UserSrv)  {
    $scope.weekSelected = 0;
     $scope.userId = $state.params.id;





    UserSrv.getUser($scope.userId, function (user) {
      $scope.user = user;
      console.log('$scope.user',   $scope.user);
      localStorageService.set('user-info', $scope.user);
    });

    UserSrv.getRoutine($scope.userId, function (routine) {
      $scope.routine = routine;
      localStorageService.set('routine-info', $scope.routine);
    });

    $scope.isWeekSelected = function(index){
      console.log("scope: " + $scope.weekSelected + " index: " + index);
      if($scope.weekSelected == $scope.routine.vectWeekMonth[index]) return (true)
      else return (false)

    }


    $scope.changeWeek = function(index){
      $scope.weekSelected = index;
    }
  });