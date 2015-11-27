'use strict';

angular.module('homegymApp')
  .service('UserSrv', function ($resource) {

  	var User = $resource('/api/user/get');

  	this.getUser = function (userId, cb) {
     	return User.save({userId: userId}, cb);
    };
      
  });  	
