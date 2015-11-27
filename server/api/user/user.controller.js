var Service = require('./user.service');

exports.registerUser = function (req, res) {
  Service.createUserDB(req, function (data, error){
  	if(error) res.json(error);
    res.json(data);
  });
}

exports.login = function (req, res) {
	Service.login(req, function (data, error){
  	if(error) res.json(error);
    res.json(data);
  });
}

exports.searchUser = function (req, res) {
  Service.searchUser(req, function (data, error){
  	if(error) res.json(error);
    res.json(data);
  });
}

exports.updateUser = function (req, res) {
  Service.updateUser(req, function (data, error){
  	if(error) res.json(error);
    res.json(data);
  });
}



