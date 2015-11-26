var datos = require('./basededatos.js');

    var Firebase = require("firebase");
    var ref = new Firebase("https://dazzling-inferno-7243.firebaseio.com/");
    var usersRef = ref.child("usuario");

exports.crearUsuario = function (req, res){
  datos.guardarUsuario(req,function(error,respuesta){
      res.json({
      error: error,
      respuesta: respuesta,
    });
  });
  console.log("hola,  creando usuario");
}



exports.autenticarUsuario = function (req, res){
  datos.autenticarUsuario(req,function(error,respuesta){
      res.json({
      error: error,
      respuesta: respuesta,
    });
  });
}


exports.crearUsuarioBD = function (req,res){
  datos.crearUsuarioBD(req,function (error,respuesta,datosUsuario){
     res.json({
      error: error,
      respuesta: respuesta,
      datos: datosUsuario,
    });
  });
}

/*
exports.autenticarUsuarioFB = function (req,res){
  datos.autenticarUsuarioFB(req,function (error,respuesta,datosUsuario){
    /* res.json({
      error: error,
      respuesta: respuesta,
      datos: datosUsuario,
    });
  });
}*/

exports.consultarUsuarios = function(req,res){
    datos.consultarUsuarios(req,function(error,usuarios){
      
      res.json({
        usuario: usuarios,
      });
    });
}


exports.consultarUsuario = function(req,res){
  datos.consultarUsuario(req,function(error,datosUsuario){
      
      res.json({
        usuario: datosUsuario,
      });
    });
}



exports.buscarDato = function (req,res){
  datos.buscarDato(req.body.ruta,req.body.variable,req.body.valor,function(key,datosUsuario){
      console.log(datosUsuario);
      res.json({
        key: key,
        usuario: datosUsuario,
      });
    });
}


exports.actualizarDato = function (req,res){
   datos.actualizarDato(req,function(err){
      console.log("\n\n"+err+"\n\n");
      res.json({
        error: err,
      });
    });
}


exports.crearEnfermedad = function (req, res){
  datos.crearEnfermedad(req,function(error,respuesta){
      res.json({
        error: error,
        respuesta: respuesta,
    });
  });
}

// crear plan con los datos: nombre, descripcion, monto y descuento
exports.crearPlan = function(req,res){
  datos.crearPlan(req,function(error,respuesta){
      res.json({
        error: error,
        respuesta: respuesta,
    });
  });
}

// crear ejercicio con los datos nombre,descripcion, calorias, video
exports.crearEjercicio = function(req,res){
  datos.crearEjercicio(req,function(error,respuesta){
      res.json({
        error: error,
        respuesta: respuesta,
    });
  });
}



function searchRoutine(req,res){
  datos.searchRoutine(req.body.id,function(dataRoutine){
     res.json({
        routine: dataRoutine
    });
  });
}