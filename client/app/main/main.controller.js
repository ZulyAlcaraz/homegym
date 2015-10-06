'use strict';

angular.module('homegymApp')
  .controller('MainCtrl', function ($scope, $http, $resource) {
    // $scope.awesomeThings = [];

    // $http.get('/api/things').success(function(awesomeThings) {
    //   $scope.awesomeThings = awesomeThings;
	  
    // });

    //  $http.get('/api/masa').success(function(awesomeThings) {
    //   $scope.awesomeThings = awesomeThings;
    //   alert(JSON.stringify($scope.awesomeThings));
    // });

     // var masa = $resource('/api/masa', {});
     // masa.get({
     //   altura: 1,
     //   peso: 2        
     // }, function(res) {
     //    alert(JSON.stringify(res));
     // });
     
     // var masa = $resource('/api/masa', {});
     // masa.save({
     //   altura: 1,
     //   peso: 2        
     // }, function(res) {
     //    alert(JSON.stringify(res));
     // });
      

     // var masa = $resource('/api/masa/ingreso/:id', {});
     // masa.get({
     // 	id: 1234,
     // 	value: 'nada'
     // }, function(res) {
     //    alert(JSON.stringify(res));
     // });
	
  });

