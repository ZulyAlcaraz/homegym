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
}



exports.autenticarUsuario = function (req, res){
  datos.autenticarUsuario(req,function(error,respuesta){
      res.json({
      error: error,
      respuesta: respuesta,
    });
  });
}