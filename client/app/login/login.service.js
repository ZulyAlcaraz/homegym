'use strict';

angular.module('homegymApp')
  .service('LoginSrv', function ($resource) {

  	var User = $resource('/api/user/login');
  	var UserOut = $resource('/api/user/logout');

  	this.login = function (user, cb) {
     	return User.save(user, cb);
    };

    this.logout = function (cb) {
    	return UserOut.save({}, cb);
    };
      
  });  	  	