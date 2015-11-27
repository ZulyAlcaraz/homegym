
var Firebase = require('firebase');
var environment = require('../../config/environment');
var ref = new Firebase(environment.database.url);
var ServiceMasa = require('../masa/calculadora');

//crea un usuario usando las tablas de firebase
function createUserDB (req, callback){
  ref.createUser({
    email: req.body.email,
    password: req.body.password
  }, function (error, datauid) {
  	if (error) {
  		switch (error.code) {
        case 'EMAIL_TAKEN':
          error='La nueva cuenta de usuario no se puede crear porque el correo electrónico ya está en uso.';
          break;
        case 'INVALID_EMAIL':
          error='El correo electrónico especificado no es un correo electrónico válido.';
          break;
        default:
          error='Error creando el usuario:' + error;
      }
      callback(null, {error : error});
  	}
  	
  	login(req, function (data, error){
  		if (error) callback(error);
  		createProfile (req, function (data, error) {
        createRoutine(data.uid);
  			callback(datauid);
  		});
  	})
	  
  });
}

function createProfile (req, callback){
	var isNewUser = true;
	ref.onAuth(function (authData) {
	  if (authData && isNewUser) {
	    ref.child("users").child(authData.uid).set({
	      name: req.body.name,
	      lastName: req.body.lastName,
	      email: req.body.email
	    });
      
	    callback(authData);
	  }
	});
}

function login (req, callback) {
	ref.authWithPassword({
	  email    : req.body.email,
	  password : req.body.password
	}, function(error, authData) {
	  if (error)  {
	  	error = 'Usuario o contraseña invalidos.'
	  	callback(null, {error: error});
	  }
	  callback(authData);
  });
};

function searchUser (req, callback) {
  console.log('req.body', req.body);
	var usersRef = ref.child('users').child(req.body.userId);
  usersRef.on('value', function(snapshot) {
    console.log('snapshot', snapshot.val());
    callback(snapshot.val());
  });
}

function updateUser (req, callback) {
  ServiceMasa.imc(req.body.height, req.body.weight, function (imc, type) {
    ref.child("users").child(req.body.id).child("physicalCondition").set({
      weight: req.body.weight,
      illnesses: req.body.illnesses,
      height: req.body.height,
      imc: imc,
      type: type
    }, function (error, data) {
      if (error) callback(null, error);
      callback(data);
    });
  });
  
}

function createRoutine (id){
  var f = new Date();
  var numWeek;
  var lastDayMounth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var dayWord = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
  var day = f.getDate();
  var month = f.getMonth();
  var year = f.getFullYear();

  for(var i=day;i<=lastDayMounth[month];i++){
     week(i,month,year,function(nWeek){
      numWeek = nWeek;
     });
     f.setDate(i);
    //$weekNum = date(“W”) – date(“W”,strtotime(date(“Y-m-01”))) + 1;
    actualDate = new Date();
    ref.child("users").child(id).child("year").child(year).child("month").child(month).child("week").child(numWeek).child("day").child(i).set({
      url : "url"+i,
      name : dayWord[f.getDay()]
      },function(error) {
        
    });
  }
}

function week(day,month,year,callback){

  var f1 = new Date(year,0,1,0,0);
  var dayf1 = f1.getDay();
  if(dayf1 == 0)
    dayf1 = 7;

  var f2 = new Date(year,month,day,0,0);
  var dayf2 = f2.getDay();
  if(dayf2 == 0)
    dayf2 = 7;

  if(month == 0 && day == 1 && dayf2 > 4 || month == 0 && day == 2 && dayf2 > 5 || month == 0 && day == 3 && dayf2 == 7){
    f1 = new Date(year-1,0,1,0,0);
    f2 = new Date(year-1,11,31,0,0);
    dayf1 = f1.getDay();
    if(dayf1 == 0)
      day = 7;
  }
  if(month == 11 && day == 31 && dayf2 < 4 || month == 11 && day == 30 && dayf2 < 3 || month == 11 && day == 29 && dayf2 == 1)
    return 1;

  if(dayf1 <5)
    var FW = parseInt(((Math.round(((f2-f1)/1000/60/60/24))+(dayf1-1))/7) + 1);
  else
   var FW = parseInt(((Math.round(((f2-f1)/1000/60/60/24))+(dayf1-1))/7));
  callback(FW);
} 


exports.createUserDB = createUserDB;
exports.login = login;
exports.searchUser = searchUser;
exports.updateUser = updateUser;
