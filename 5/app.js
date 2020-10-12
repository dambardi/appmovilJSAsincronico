const obtenerPersonaFake = require("./library");

// Codigo funcion callback
function callback(persona) {
    persona.results.forEach(i=> {
        console.log("Nombre y Apellido: "+persona.name.first+" "+persona.name.last);
        console.log("Genero: " + persona.gender);
        console.log("Pais: " + persona.location.country);
        console.log("Estado: " + persona.location.state);
        console.log("Ciudad: " + persona.location.city);
        console.log("Calle: " + persona.location.street.name + " numero: " + persona.location.street.number);
        console.log("CP: "+ persona.location.postcode);
        console.log("Mail: " + persona.email);
        console.log("Usuario: " + persona.login.username);
        console.log("Contraseña: " + persona.login.password);
    })
}

// Fin codigo

// Usar la funcion obtenerPersonaFake(funcionCallback) en donde funcionCallback es una función que recibe el objeto persona extraido
obtenerPersonaFake(callback);
