/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */
 /*
	medidas del imc: kg/m^2
 */

'use strict';

var _ = require('lodash');
var calculadora = require('./calculadora.js');


exports.index = function(req, res) {
  var altura=1.72;	//en metros
  var peso=80;		//en kilogramos


  calculadora.imc(altura,peso,function (imc,clasificacion){

	res.json({
		valor: imc,
		resultado: clasificacion,
	});
  });
  
};