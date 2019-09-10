const allPokemonOnData= POKEMON.pokemon;
window.allPokemonOnData= allPokemonOnData;
//Llama al espacio del html para mostrar los resultados
 let showCardsComplete = document.getElementById("results");
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

//Funciones para sacar el value de los selects
function alphabeticSort(){
    let valor = document.getElementById("alphabeticOrder").value;
    sortAlphabetic(valor);
  } 



 function filtrarPorTipo(){
    let valor = document.getElementById("filterType").value;
    filterPokemonType(valor);
  }

 
function filterOfEggs(){
    let valor = document.getElementById("eggFilter").value;
    filterEggs(valor);
  } 
