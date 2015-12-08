/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');

// Get list of things
exports.index = function (valor, resultado) {
  var i;
  var clasificacion;
  calculadora.imc(imc,clasificacion,70,172);
  
  //% de masa grasa= 1,2 x (IMC) + 0,23 x (Edad en años) – 10,8 x (sexo) – 5,4

  res.status(200).json({
		valor: imc,
		resultado: clasificacion,
  });
};