'use strict';

angular.module('homegymApp')
  .controller('SignUpCtrl', function ($scope, $http, $resource, RegisterSrv) {

  	$scope.signUpForm = {};

  	$scope.register = function () {
      
      if ($scope.signUpForm) {
      	RegisterSrv.createAccount(user.email, user.password, {rememberMe: true})
	        .then(function () {
	          $scope.showLoading = false;
	          $state.go('profile');
	        }).catch(function (error) {
	          $scope.showLoading = false;
	          $rootScope.$emit('alert', { msg: error.message });
	        });
			}
      
  });