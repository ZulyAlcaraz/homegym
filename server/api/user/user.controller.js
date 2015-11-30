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

exports.searchRoutineMonth = function (req,res){
  /* console.log("hola" + firstWeek);
  console.log(data[firstWeek].day[26]);
  console.log(days);
 for(i=firstWeek;i<=lastWeek;i++){
  for(j=days[i][0];j<=days[i][1];j++){
    console.log(data[i].day[j].name);
  }
}*/
  Service.searchRoutineMonth(req.body.userId,req.body.year,req.body.month,function(error,firstWeek,lastWeek,progress,days,data){
    res.json({
      error : error,
      firstWeek : firstWeek,
      lastWeek : lastWeek,
      days : days,
      progress: progress,
      data : data
    });
  });

  
}


exports.logout = function (req,res){
  Service.logout();
}

