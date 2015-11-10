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