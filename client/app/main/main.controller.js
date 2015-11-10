'use strict';

angular.module('homegymApp')
  .controller('MainCtrl', function ($scope, $http, $resource) {
    // $scope.awesomeThings = [];

    // $http.get('/api/things').success(function(awesomeThings) {
    //   $scope.awesomeThings = awesomeThings;
	  
    // });

    //  $http.get('/api/masa').success(function(awesomeThings) {
    //   $scope.awesomeThings = awesomeThings;
    //   alert(JSON.stringify($scope.awesomeThings));
    // });

     // var masa = $resource('/api/masa', {});
     // masa.get({
     //   altura: 1,
     //   peso: 2        
     // }, function(res) {
     //    alert(JSON.stringify(res));
     // });
     
     // var masa = $resource('/api/masa', {});
     // masa.save({
     //   altura: 1,
     //   peso: 2        
     // }, function(res) {
     //    alert(JSON.stringify(res));
     // });
      

     // var masa = $resource('/api/masa/ingreso/:id', {});
     // masa.get({
     // 	id: 1234,
     // 	value: 'nada'
     // }, function(res) {
     //    alert(JSON.stringify(res));
     // });
	   
 
  //------------------------------------------------------------------------- esto lo hiso diego
     /* crear usuario
$http.post('/api/datos/otro', {nombre : "req.body.nombre",
        apellido: "req.body.apellido",
        correo: "req.body.correo",
        contrasena: "req.body.contrasena",
        genero: "req.body.genero",
        fechaNacimiento: "req.body.fechaNacimiento",
        altura: "req.body.altura",
        peso: "req.body.peso",
        ciudad: "req.body.ciudad",
        pais: "req.body.pais",
        condicion: "req.body.condicion",
        enfermedades: {},
        rutinas: {},
        plan : {}   }).
  success(function(data, status, headers, config) {
    alert(JSON.stringify(data));
  })
*/


/*autenticar usuario
    $http.post('/api/datos/autenticar', {
        usuario: 'juanaito@hotmail.com',
        contrasena: '1234'
    }).
  success(function(data, status, headers, config) {
    alert(JSON.stringify(data));
  })*/

//---------------------------------------------------------------------------------


  });
