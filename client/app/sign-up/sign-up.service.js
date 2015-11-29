'use strict';

angular.module('homegymApp')
  .service('RegisterSrv', function ($resource) {

  	var User = $resource('/api/user/register');

  	this.createAccount = function (user, cb) {
     	return User.save(user, cb);
    };
      
  });  	