'use strict';

angular.module('homegymApp')
  .service('LoginSrv', function ($resource) {

  	var User = $resource('/api/user/login');

  	this.login = function (user, cb) {
     	return User.save(user, cb);
    };
      
  });  	  	
