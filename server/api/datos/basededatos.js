//crea un usuario en la tabla usuario
exports.guardarUsuario = function(req,callback) {

	var Firebase = require("firebase");
    var ref = new Firebase("https://dazzling-inferno-7243.firebaseio.com/");
    var usersRef = ref.child("usuario");
    usersRef.push({
     

	    'nombre' : req.body.nombre,
	    'apellido': req.body.apellido,
	    'correo': req.body.correo,
	    'contrasena': req.body.contrasena,
	    'genero': req.body.genero,
	    'fechaNacimiento': req.body.fechaNacimiento,
	    'altura': req.body.altura,
	    'peso': req.body.peso,
	    'ciudad': req.body.ciudad,
	    'pais': req.body.pais,
	    'condicion': req.body.condicion,
	    'enfermedades': {},
	    'rutinas': {},
	    'plan' : {}
  
    },function(error) {
  		if (error) {
   			callback(error,null);
  		} else {
   			callback(null,null);
 		}
	});
};


//autentica un usuario usando la autenticación de firebase
exports.autenticarUsuario = function(req,callback){
	var Firebase = require("firebase");
    var ref = new Firebase("https://dazzling-inferno-7243.firebaseio.com/");

	ref.authWithPassword({
	email    : req.body.usuario,
	password : req.body.contrasena
	}, function(error, authData) {
  		if (error) {
    		callback(error, null);
  		} else {
			callback(null, authData);
  		}
	});
}


exports.autenticarUsuarioFB = function(req,callback){
	var Firebase = require("firebase");
	var ref = new Firebase("https://dazzling-inferno-7243.firebaseio.com/");
    ref.authWithOAuthPopup("facebook", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
      }
    });
}

//crea un usuario usando las tablas de firebase
exports.crearUsuarioBD = function(req,callback){
	var Firebase = require("firebase");
	var ref = new Firebase("https://dazzling-inferno-7243.firebaseio.com/");
	var error = null;
	var respuesta = null;
	var datosUsuario = null;
    ref.createUser({
      email: req.body.correo,
      password: req.body.contrasena
    }, function(errorr, userData) {
      if (errorr) {
        switch (errorr.code) {
          case "EMAIL_TAKEN":
            error="La nueva cuenta de usuario no se puede crear porque el correo electrónico ya está en uso.";
            break;
          case "INVALID_EMAIL":
            error="El correo electrónico especificado no es un correo electrónico válido.";
            break;
          default:
            error="Error creando el usuario:" + errorr;
        }
      } else {
        respuesta="Cuenta creada con éxito";
    	datosUsuario=userData.uid;
      }
      callback(error,respuesta,datosUsuario);
    });
}