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
	console.log('req.params', req.params);
	console.log('req.query', req.query);

	// GET
  // var altura = req.query.altura;	//en metros
  // var peso = req.query.peso;		//en kilogramos

  // POST
  var altura = req.body.altura;	//en metros
  var peso = req.body.peso;		//en kilogramos

  calculadora.imc(altura,peso,function (imc,clasificacion){

		res.json({
			valor: imc,
			resultado: clasificacion,
		});
  });
  
};