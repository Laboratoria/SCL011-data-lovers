/* Manejo del DOM */

//const listPokemon = POKEMON.results;
//for (let i = 0; i < listPokemon.length; i++) {

// let tipo = listPokemon[i].type;
//console.log(tipo)
//}


// crear una costante para todo(que es all) que sea igual a POKEMON (por la constante de la data que nos entregaron)
// es .pokemon porque dentro de ("pokemon") se alojan todos los demas datos. Es un arreglo con muchos elementos adentro.
const data = POKEMON.pokemon;
//se usa console log para revisar el todo (all) en la consola.
//console.log(data);

//Mostrar toda la data en CARDS
const showData = (data) => {
    //Va ir guardado los datos entregados
    let result = "";
    console.log(data);
};
window.onload = showData(data);