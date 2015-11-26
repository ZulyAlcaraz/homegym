
var Firebase = require('firebase');
var environment = require('../../config/environment');
var ref = new Firebase(environment.database.url);

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
	var usersRef = ref.child('users');
  usersRef.on('value', function(snapshot) {
    console.log('snapshot', snapshot);
    callback(true);
  });
}

// function updateUser (req, callback) {
//   var idd=req.body.id;
//   var rutaRef = new Firebase("https://dazzling-inferno-7243.firebaseio.com/"+req.body.ruta+"/"+req.body.id);
//   var err=null;
//   rutaRef.update(

//      req.body
//   ,function(error) {
//     if (error) {
//       err = error;
//     }
//   });
//   rutaRef.child("id").remove();
//   rutaRef.child("ruta").remove();
//   callback(err);
// }

function createRoutine (req, callback){
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



exports.createUserDB = createUserDB;
exports.login = login;
exports.searchUser = searchUser;
// exports.updateUser = updateUser;
