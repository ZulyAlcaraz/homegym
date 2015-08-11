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
exports.index = function(req, res) {
console.log('mamaaaaaaaaaa');
	var peso = 60;
	var altura = 1.74;
	var imc = peso/(Math.pow(altura,2));
	var clasificacion;
	if(imc < 16){
		clasificacion = "Infrapeso: Delgadez Severa";
	}else if(imc < 17){
		clasificacion = "Infrapeso: Delgadez moderada";
	}else if(imc < 18.5){
		clasificacion = "Infrapeso: Delgadez aceptable";
	}else if(imc < 25){
		clasificacion = "Peso Normal";
	}else if(imc < 30){
		clasificacion = "Sobrepeso";
	}else if(imc < 35){
		clasificacion = "Obeso: Tipo I";
	}else if(imc <= 40){
		clasificacion = "Obeso: Tipo II";
	}else{
		clasificacion = "Obeso: Tipo III";
	}
	
  res.json({
	valor: imc,
	resultado: clasificacion,
  });
};