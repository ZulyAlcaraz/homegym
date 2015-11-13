'use strict';

angular.module('homegymApp')
  .service('RegisterSrv', function ($resource) {

  	var User = $resource(
  		'/api/v1/user/:action/:userId',
  		{
      	userId: ''
    	}, 
    	{
      	post: 
      	{ 
      		method:'POST', 
      		isArray: true 
      	}
    	}
    );

  	this.createAccount = function (user, successFn, errorFn) {
     	
    };
      
  });  	
