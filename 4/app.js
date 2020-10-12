
const obtenerPokemon = require("./library");

// Usar la funcion obtenerChiste(nombrePokemon) la cual recibe como string un nombre de pokemon y devuelve la promesa de traer el objeto pokemon extraido
obtenerPokemon("Charmander").then(dPokemon => {
    console.log("Nombre: " + dPokemon.forms[0].name);
    dPokemon.abilities.forEach(h => console.log("Habilidad: " + h.ability.name));
});