
const obtenerPersonaFake = require("./library");

// Usar la funcion obtenerPersonaFake() la cual devuelve la promesa de traer el objeto persona extraido
obtenerPersonaFake().then(persona => {
    persona.results.forEach(i => {
        console.log("Nombre y Apellido: "+persona.name.first+" "+persona.name.last);
        console.log("Genero: " + persona.gender);
        console.log("Pais: " + persona.location.country);
        console.log("Estado: " + persona.location.state);
        console.log("Ciudad: " + persona.location.city);
        console.log("Calle: " + persona.location.street.name + " Numero: " + persona.location.street.number);
        console.log("CP: "+ persona.location.postcode);
        console.log("Mail: " + persona.email);
        console.log("Usuario: " + persona.login.username);
        console.log("Contraseña: " + persona.login.password);
    })
});
