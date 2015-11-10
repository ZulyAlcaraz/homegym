var calculadora = require('./basededatos.js');

    var Firebase = require("firebase");
    var ref = new Firebase("https://dazzling-inferno-7243.firebaseio.com/");
    var usersRef = ref.child("usuario");
  /*  usersRef.push({
     

    'nombre' : 'Gregoria',
    'apellido': 'Rusember',
    'correo': 'nose@asdas.com',
    'contraseña': '123',
    'genero': 'masculina',
    'fechaNacimiento': '20/52/2102',
    'altura': '180',
    'peso': '10',
    'ciudad': 'Aca',
    'pais': 'aca',
    'condicion': 'mala',
    'enfermedades': {},
    'rutinas': {},
    'plan' : {}
  
    });*/


ref.authWithPassword({
  email    : "juanito@hotmail.com",
  password : "1234"
}, function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
  }
});


