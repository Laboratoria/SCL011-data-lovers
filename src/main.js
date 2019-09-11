const allPokemonOnData= POKEMON.pokemon;

window.allPokemonOnData= allPokemonOnData;

//Cartas
//Llama al espacio del html para mostrar los resultados
const showCardsComplete = document.getElementById("results");
const pokemonCards =(allPokemonOnData)=>{
//Donde se creará la tarjeta
let pokemonCards="";

//Recorre la data completa, element es el nombre que le asigna a cada elemento que contiene la data
allPokemonOnData.forEach((element=>{
//concatenamos para que vaya sumando una tarjeta tras otra
pokemonCards +=
  //creamos divs uno muestra la imagen y otro un espacio de texto para el nombre
 `<div class="cardStyle">
    <img src="${element.img}" alt="imagenPokemon">
 <h4>${element.name}</h4>
  </div>`
  //imprimimos en el espacio results lo que le añadimos a pokemonCards
showCardsComplete.innerHTML= pokemonCards;
}))
}
pokemonCards(allPokemonOnData)


//Selects
const abcSelect= document.getElementById("alphabeticOrder");
abcSelect.addEventListener('change',()=>{
  const valorAbc= abcSelect.value;
  let resultAbc= window.orderABC(allPokemonOnData, valorAbc);
  pokemonCards(resultAbc);
})


const typeSelect= document.getElementById("filterType");
typeSelect.addEventListener('change', ()=>{
  const valorType= typeSelect.value;
  let resultType= window.filterByType(allPokemonOnData, valorType);
  pokemonCards(resultType);
})


const eggSelect= document.getElementById("filterEgg");
eggSelect.addEventListener('change', ()=>{
  const valorEgg= eggSelect.value;
  let resultEgg=window.filterByEgg(allPokemonOnData, valorEgg);
  pokemonCards(resultEgg);
})

