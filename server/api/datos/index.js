'use strict';

var express = require('express');
var controller = require('./datos.controller');

var router = express.Router();


//ruta para crear tabla de usuario
router.route('/usuario')
  .post(controller.crearUsuario);

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

router.route('/consultarUsuarios')
  .post(controller.consultarUsuarios);

router.route('/consultarUsuario:id')
  .get(controller.consultarUsuario);



module.exports = router;




