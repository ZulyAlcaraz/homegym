'use strict';

angular.module('homegymApp')
  .controller('DashboardCtrl', function ($scope, $state, localStorageService, UserSrv) {
    $scope.userId = $state.params.id;

    console.log('$scope.userId',   $scope.userId);
    $scope.user = localStorageService.get('user-info');
    console.log('$scope.user',   $scope.user);

    UserSrv.getUser($scope.userId, function (user) {
      $scope.user = user;
      console.log('$scope.user',   $scope.user);
      localStorageService.set('user-info', $scope.user);
    });



   

  });