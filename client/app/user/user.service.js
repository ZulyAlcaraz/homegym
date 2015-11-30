'use strict';

angular.module('homegymApp')
  .service('UserSrv', function ($resource) {

  	var User = $resource('/api/user/get');

  	this.getUser = function (userId, cb) {
     	return User.save({userId: userId}, cb);
    };



  	var Routine = $resource('/api/user/searchRoutineMonth');

  	this.getRoutine = function (userId, cb) {

  		var f1 = new Date();
  		var year = f1.getFullYear();
  		var month = f1.getMonth();

     	return Routine.save({userId: userId, year: year, month: month}, cb);
    };

      
  });  