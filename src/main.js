/* Manejo del DOM */

//const listPokemon = POKEMON.results;
//for (let i = 0; i < listPokemon.length; i++) {

// let tipo = listPokemon[i].type;
//console.log(tipo)
//}


// crear una costante para todo(que es all) que sea igual a POKEMON (por la constante de la data que nos entregaron)
// es .pokemon porque dentro de ("pokemon") se alojan todos los demas datos. Es un arreglo con muchos elementos adentro.
const allData = POKEMON.pokemon;
//se usa console log para revisar el todo (all) en la consola.
console.log(allData);

window.onload = mostrar;
/* obtener el elemento por id*/
function mostrar() {
    document.getElementById("pantallaInicio").style.display = "block";
    document.getElementById("menu-header").style.display = "none";
}

/* obtener el elemento por id*/
document.getElementById("pokebola").addEventListener('click', (evento) => {
    evento.preventDefault();
    document.getElementById("pantallaInicio").style.display = "none";
    document.getElementById("menu-header").style.display = "block";
});