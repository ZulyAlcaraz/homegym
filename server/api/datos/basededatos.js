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
}

//crea una enfermedad con los datos nombre,descripcion,recomendaciones,tipo
exports.crearEnfermedad = function(req,callback){
  var Firebase = require("firebase");
    var ref = new Firebase("https://dazzling-inferno-7243.firebaseio.com/");
    var usersRef = ref.child("enfermedad");
    usersRef.push({
      
      'nombre' : req.body.nombre,
      'descripcion': req.body.descripcion,
      'recomendaciones': req.body.recomendaciones,
      'tipo': req.body.tipo

      
  
    },function(error) {
      if (error) {
        callback(error,null);
      } else {
        callback(null,null);
    }
  });
}

// crear ejercicio con los datos nombre,descripcion, calorias, video
exports.crearEjercicio = function(req,callback){
  var Firebase = require("firebase");
    var ref = new Firebase("https://dazzling-inferno-7243.firebaseio.com/");
    var usersRef = ref.child("ejercicio");
    usersRef.push({
      'nombre' : req.body.nombre,
      'descripcion': req.body.descripcion,
      'calorias': req.body.calorias,
      'video': req.body.video
    },function(error) {
      if (error) {
        callback(error,null);
      } else {
        callback(null,null);
    }
  });
}

// crear plan con los datos: nombre, descripcion, monto y descuento
exports.crearPlan = function(req,callback){
    var Firebase = require("firebase");
    var ref = new Firebase("https://dazzling-inferno-7243.firebaseio.com/");
    var usersRef = ref.child("plan");
    usersRef.push({
      'nombre' : req.body.nombre,
      'descripcion': req.body.descripcion,
      'monto': req.body.monto,
      'descuento': req.body.descuento
    },function(error) {
      if (error) {
        callback(error,null);
      } else {
        callback(null,null);
    }
  });
}


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
	var err=null;
	var respuesta=null;
	var datosUsuario=null;
    ref.authWithOAuthPopup("facebook", function(error, authData) {
      if (error) {
        err="Error" + error;
      } else {
        respuesta="Authenticated successfully";
        datosUsuario = authData;
      }
      callback(err,respuesta,datosUsuario);
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



exports.consultarUsuarios = function(req,callback){
  var Firebase = require("firebase");
  var ref = new Firebase("https://dazzling-inferno-7243.firebaseio.com/");
 // Attach an asynchronous callback to read the data at our posts reference
  ref.child("usuario").on("value", function(snapshot) {
    callback(null,snapshot.val());
  }, function (errorObject) {
    callback("The read failed: " + errorObject.code,null);
  });
}


exports.consultarUsuario = function(req,callback){
  var Firebase = require("firebase");
  var ref = new Firebase("https://dazzling-inferno-7243.firebaseio.com/usuario/"+req.params.id);
 
 // Attach an asynchronous callback to read the data at our posts reference
  ref.on("value", function(snapshot) {
    callback(null,snapshot.val());
  }, function (errorObject) {
    callback("The read failed: " + errorObject.code,null);
  });
}

/*exports.buscarDato = function (ruta,variable,valor){
   var Firebase = require("firebase");
  var rutaRef = new Firebase("https://dazzling-inferno-7243.firebaseio.com/"+ruta);
    rutaRef.on("value", function(snapshot) {
      snapshot.child(key()).forEach(function(data) {
        if(data.val().variable == valor ){
          console.log("The " + data.key() + " dinosaur's score is " + data.val());
        }else{
           console.log("valor: " + data.val() + " = valor: " + valor);
        }
        
      });
    });
}
*/


/*exports.buscarDato = function (ruta,variable,valor,callback){
  var Firebase = require("firebase");

  var rutaRef = new Firebase("https://dazzling-inferno-7243.firebaseio.com/"+ruta);
  var datosUsuarioss = new Array();

    rutaRef.on("value", function(snapshot) {
      var datosUsuario = snapshot.val();

      snapshot.forEach(function(data) {
        
        if(data.val()[variable] == valor ){
        //console.log("\n\nel usuario con id: " + data.key() + " \ncorreo " + data.val()[variable]+"\nvalor: "+valor);
          datosUsuarioss[data.key()] = data.val();
          
         // console.log("\n\n"+datosUsuario);
        }
        
      });
      callback(datosUsuarioss);
    });
}*/


exports.buscarDato = function (ruta,variable,valor,callback){
  var Firebase = require("firebase");

  var rutaRef = new Firebase("https://dazzling-inferno-7243.firebaseio.com/"+ruta);
  var datosUsuario;
  var key;

    rutaRef.on("value", function(snapshot) {


      snapshot.forEach(function(data) {
        
        if(data.val()[variable] == valor ){
        //console.log("\n\nel usuario con id: " + data.key() + " \ncorreo " + data.val()[variable]+"\nvalor: "+valor);
         // datosUsuario = data.val();
         key=data.key();
         datosUsuario= data.val();
          
         // console.log("\n\n"+datosUsuario);
        }
        
      });
      callback(key, datosUsuario);
    });
}


exports.actualizarDato = function(req, callback){
  var Firebase = require("firebase");
  var idd=req.body.id;
  var rutaRef = new Firebase("https://dazzling-inferno-7243.firebaseio.com/"+req.body.ruta+"/"+req.body.id);
  var err=null;
  rutaRef.update(

     req.body
  ,function(error) {
    if (error) {
      err = error;
    }
  });

  rutaRef.child("id").remove();
  rutaRef.child("ruta").remove();
  callback(err);
  
}