'use strict';

var express = require('express');
var controller = require('./datos.controller');

var router = express.Router();


//ruta para crear tabla de usuario
router.route('/usuario/registrar')
  .post(controller.crearUsuario);


 router.route('/crearEnfermedad')
  .post(controller.crearEnfermedad);

// crear plan con los datos: nombre, descripcion, monto y descuento
 router.route('/crearPlan')
  .post(controller.crearPlan);


// crear ejercicio con los datos nombre,descripcion, calorias, video
 router.route('/crearEjercicio')
  .post(controller.crearEjercicio);

// autentica un usuario
router.route('/autenticar')
  .post(controller.autenticarUsuario);

//crea un usuario en la base de datos
router.route('/crearUsuarioBD')
  .post(controller.crearUsuarioBD);

/*
//autenticar usuario por medio de facebook
router.route('/autenticarUsuarioFB')
  .post(controller.autenticarUsuarioFB);
*/

// consulta la informacion de todos los usuarios en la tabla de usuario
router.route('/consultarUsuarios')
  .post(controller.consultarUsuarios);


//consulta la informacion de un solo usuario
router.route('/consultarUsuario:id')
  .get(controller.consultarUsuario);

//consulta datos enviando ruta, variable y valor
router.route('/buscarDato')
  .post(controller.buscarDato);

//actualiza datos enviando la ruta(donde esta ubicado el recurso), id(la clave que da firebase) y los datos (con igual nombre donde esta en la base de datos)
router.route('/actualizarDato')
  .post(controller.actualizarDato);

/*--------------------------------------------------------
v2

*/
router.route('/searchRoutine')
  .post(controller.actualizarDato);



module.exports = router;




