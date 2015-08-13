'use strict';

var environment = require('../../config/environment');

exports.getFirebase = function(req, res){
  res.status(200).json(environment.database).end();
}