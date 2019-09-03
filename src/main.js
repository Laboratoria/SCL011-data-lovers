/* Manejo del DOM */
const listPokemon = POKEMON.results;
for (let i = 0; i < listPokemon.length; i++) {
    let tipo = listPokemon[i].type;
    console.log(tipo)
}