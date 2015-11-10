exports.guardarUsuario = function(nombre,apellido,correo,contrasena,genero,fechaNacimiento,altura,peso,ciudad,pais,condicion,enfermedades,rutinas,plan,callback) {

	var Firebase = require("firebase");
    var ref = new Firebase("https://dazzling-inferno-7243.firebaseio.com/");
    var usersRef = ref.child("usuario");
    usersRef.push({
     

	    'nombre' : nombre,
	    'apellido': apellido,
	    'correo': correo,
	    'contrasena': contrasena,
	    'genero': genero,
	    'fechaNacimiento': fechaNacimiento,
	    'altura': altura,
	    'peso': peso,
	    'ciudad': ciudad,
	    'pais': pais,
	    'condicion': condicion,
	    'enfermedades': {},
	    'rutinas': {},
	    'plan' : {}
  
    });

	callback(imc,clasificacion);
};



exports.autenticacion = function(usuario,contrasena,callback){
	var Firebase = require("firebase");
    var ref = new Firebase("https://dazzling-inferno-7243.firebaseio.com/");

	ref.authWithPassword({
	email    : usuario,
	password : contrasena
	}, function(error, authData) {
  		if (error) {
    		callback(error, null);
  		} else {
			callback(null, authData);
  		}
	});
}