'use strict';

angular.module('homegymApp')
  .service('WeightDataSrv', function ($resource) {

  	var User = $resource('/api/user/update');

  	this.updateData = function (user, cb) {
     	return User.save(user, cb);
    };
      
  });  	
