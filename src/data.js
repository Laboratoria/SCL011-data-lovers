/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/*const example = () => {
  return 'example';
};

window.example = example;*/
const allDataPokemon = POKEMON.pokemon;
for(let i=0; i < allDataPokemon.length; i++){
  console.log(allDataPokemon[i].type);
}