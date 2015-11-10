'use strict';

var express = require('express');
var controller = require('./datos.controller');

var router = express.Router();

router.route('/usuario')
  .post(controller.crearUsuario);


router.route('/autenticar')
  .post(controller.autenticarUsuario);




module.exports = router;