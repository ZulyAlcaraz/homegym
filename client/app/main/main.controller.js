'use strict';

angular.module('homegymApp')
  .controller('MainCtrl', function ($rootScope, $scope, Principal, localStorageService) {

    
    $rootScope.isAuthenticated =  function () {
      return Principal.isAuthenticated();
    };

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
     // crear usuario
/*$http.post('/api/datos/usuario', {nombre : "req.body.nombre",
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
  })*/



/*autenticar usuario
    $http.post('/api/datos/autenticar', {
        usuario: 'juanaito@hotmail.com',
        contrasena: '1234'
    }).
  success(function(data, status, headers, config) {
    alert(JSON.stringify(data));
  })*/

/*crea un usuario en las tablas de firebase    

    $http.post('/api/datos/crearUsuarioBD', {
        correo: "pepito@hotmail.com",
        contrasena: "1234"
    }).
  success(function(data, status, headers, config) {
    alert(JSON.stringify(data));
  })

*/


/*autenticacion por facebook (mala)
alert("hola");
 $http.post('/api/datos/autenticarUsuarioFB', {
       
    }).
  success(function(data, status, headers, config) {
    alert(JSON.stringify(data));
  })*/


/*
// consulta todos los usuarios
$http.post('/api/datos/consultarUsuarios', {

  }).
  success(function(data, status, headers, config) {
 
    alert();
  })


});
*/
/*
//consulta de un usuario por su id
$http.get('/api/datos/consultarUsuario-K2oTTIYO4WDuqdrOL87', {

  }).
  success(function(data, status, headers, config) {
 
    alert(JSON.stringify(data));
  })


});
*/


/*
//consulta parametrisada usando ruta(url del registro que se quiere encontrar), variable(nombre de la variable), valor(valor de la variable)
$http.post('/api/datos/buscarDato', {
    ruta: "usuario",
    variable: "correo",
    valor: "juanito1@hotmail.comsasd",
  }).
  success(function(data, status, headers, config) {
   // document.getElementById("prueba").innerHTML = JSON.stringify(data);
    alert(JSON.stringify(data));
  })


});*/


//actualiza datos enviando la ruta(donde esta ubicado el recurso), id(la clave que da firebase) y los datos (con igual nombre donde esta en la base de datos)
/*$http.post('/api/datos/actualizarDato', {
    ruta: "usuario",
    id: "-K2oTTIYO4WDuqdrOL87",
    altura: "1000",
    apellido: "gregoriano",
  }).
  success(function(data, status, headers, config) {
   // document.getElementById("prueba").innerHTML = JSON.stringify(data);
    alert(JSON.stringify(data));
  })


});*/

/*
// crear enfermedad
$http.post('/api/datos/crearEnfermedad', {
    'nombre' : 'hipoglicemia',
    'descripcion': 'Los niveles normales de glucosa en  sangre de una persona son de 60 a 110 mg Dl . Un indicador menor al anterior puede indicar la presencia de una hipoglicemia en la persona.',
    'recomendaciones': 'Bebe mucha agua todos los días. Lleva caramelos o alimentos dulces en caso de una repentina baja de azúcar en la sangre. Si haces mucho ejercicio, no dejes de comer. Lleva una dieta balanceada.',
    'tipo': 'azucar'
  }).
  success(function(data, status, headers, config) {
    alert(JSON.stringify(data));
  })
  


*/

/*
// crear plan con los datos: nombre, descripcion, monto y descuento
$http.post('/api/datos/crearPlan', {
    'nombre' : 'Premiun',
    'descripcion': 'super mega duper plan, con este plan baja hasta lo que no tiene',
    'monto': '100000',
    'descuento': '0'
  }).
  success(function(data, status, headers, config) {
    alert(JSON.stringify(data));
  })
  
*/

/*
// crear ejercicio con los datos nombre,descripcion, calorias, video
$http.post('/api/datos/crearEjercicio', {
    'nombre' : 'lagartija',
    'descripcion': 'ejercicio solo apto para los que no son novatos, si eres novato mi mas sentido pesame',
    'calorias': '0.5',
    'video': 'aca/no/hay/lagartija.mp4'
  }).
  success(function(data, status, headers, config) {
    alert(JSON.stringify(data));
  })

*/


/*
$http.post('/api/user/searchRoutineMonth', {
    'id' : '3c84b2f1-143e-4031-8c00-4449b136acac',
    'year': '2015',
    'month': '10'
  }).
  success(function(data, status, headers, config) {
    for(var i=data.firstWeek;i<=data.lastWeek;i++){
     for(var j=data.days[i][0];j<=data.days[i][1];j++){
      document.getElementById("prueba").innerHTML = document.getElementById("prueba").innerHTML + "nombre del día: " + data.data[i].day[j].name + " - número: "+ j + " - ejercicio: "+data.data[i].day[j].url +" - semana_ " + i + "<br />";
    }
  }
  })

 
*/

// $http.post('/api/user/logOut')
//---------------------------------------------------------------------------------

  });