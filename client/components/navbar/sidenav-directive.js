'use strict';

angular.module('homegymApp')
  .directive('sideNav', function () {
    return {
      restrict: 'E',
      templateUrl: 'components/navbar/sidenav.html'
    };
  });
