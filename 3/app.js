const obtenerPokemon = require("./library");

// Codigo funcion callback

function callback(dPokemon) {
    console.log("Nombre: " + dPokemon.forms[0].name);
    
    dPokemon.abilities.forEach(h => console.log("Habilidad: " + h.ability.name));
    
}

// Fin codigo

// Usar la funcion obtenerPokemon(pokemon,funcionCallback) en donde:
// - nombrePokemon es un string con el nombre del pokemon
// - funcionCallback es una función que recibe el objeto con los datos del pokemon extraido

obtenerPokemon("Charmander", callback);
