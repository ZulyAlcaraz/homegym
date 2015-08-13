exports.imc = function(altura,peso,callback) {

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
	callback(imc,clasificacion);
};
