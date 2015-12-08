'use strict';

angular.module('homegymApp')
  .controller('DashboardCtrl', function ($scope, $state, localStorageService, UserSrv) {
    
    $scope.userId = $state.params.id;
    $scope.user = localStorageService.get('user-info');
    $scope.routine = localStorageService.get('routine-info');
    $scope.actualDate = new Date();

    UserSrv.getUser($scope.userId, function (user) {
      $scope.user = user;
      localStorageService.set('user-info', $scope.user);
    });

    UserSrv.getRoutine($scope.userId, function (routine) {
      $scope.routine = routine;
      localStorageService.set('routine-info', $scope.routine);
    });

    $scope.calcPercentage = function(index){
      return $scope.routine.vectPercentage[index];
    }

    $scope.isWeekEnable = function(index){
      var f = new Date();
      var day = f.getDate();
      var month = f.getMonth();
      var year = f.getFullYear();
      if(week(day,month,year) >= $scope.routine.vectWeekYear[index]){
        return (true);
      }
    return (false);
    }

    $scope.isWeekActual = function(index){
      var f = new Date();
      var day = f.getDate();
      var month = f.getMonth();
      var year = f.getFullYear();
      if(week(day,month,year) == $scope.routine.vectWeekYear[index]) {
  
        return (true);
      }
      return (false);
    }
  });


  function week(day,month,year){

    var f1 = new Date(year,0,1,0,0);
    var dayf1 = f1.getDay();
    if(dayf1 == 0)
      dayf1 = 7;

    var f2 = new Date(year,month,day,0,0);
    var dayf2 = f2.getDay();
    if(dayf2 == 0)
      dayf2 = 7;

    if(month == 0 && day == 1 && dayf2 > 4 || month == 0 && day == 2 && dayf2 > 5 || month == 0 && day == 3 && dayf2 == 7){
      f1 = new Date(year-1,0,1,0,0);
      f2 = new Date(year-1,11,31,0,0);
      dayf1 = f1.getDay();
      if(dayf1 == 0)
        day = 7;
    }
    if(month == 11 && day == 31 && dayf2 < 4 || month == 11 && day == 30 && dayf2 < 3 || month == 11 && day == 29 && dayf2 == 1)
      return(1);

    if(dayf1 <5)
      var FW = parseInt(((Math.round(((f2-f1)/1000/60/60/24))+(dayf1-1))/7) + 1);
    else
     var FW = parseInt(((Math.round(((f2-f1)/1000/60/60/24))+(dayf1-1))/7));
    return(FW);
  } 
