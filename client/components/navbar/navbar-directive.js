'use strict';

angular.module('homegymApp')
  .directive('navBar', function () {
    return {
      restrict: 'E',
      templateUrl: 'components/navbar/navbar.html'
    };
  });
