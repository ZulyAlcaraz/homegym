'use strict';

angular.module('homegymApp')
  .directive('footerSite', function () {
    return {
      restrict: 'E',
      templateUrl: 'components/footer/footer.html'
    };
  });
