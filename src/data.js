  
//funcion orden alfabetico ESTA AUN NO ME FUNCIONA
function sortAlphabetic(name){
 console.log('Recibi: '+name)
 let pokemonNames= allPokemonData.name;
 pokemonNames.sort((first, second)=>{
   return first.name - second.name;
  })
  console.log(pokemonNames);
}

//funcion ordenar por tipo
function filterPokemonType(type){
  console.log('Recibi: '+type)
  let empty =[]
  for(let i=0; i < allPokemonData.length; i++){
    for(let j=0; j < allPokemonData[i].type.length; j++){
      if(allPokemonData[i].type[j]===type){
        empty.push(allPokemonData[i]);
      }
    } 
  }
  let showCardsComplete = document.getElementById("results");
      //limpia el html y empieza a imprimir segun el filtro
  showCardsComplete.innerHTML="";
  let pokemonCards="";


  empty.forEach((element=>{
    pokemonCards +=
    `<div class="cardStyle">
    <img src="${element.img}" alt="imagenPokemon">
    <h4>${element.name}</h4>
    </div>`
    showCardsComplete.innerHTML= pokemonCards;
  }))
};

function filterEggs(egg){
  console.log('Recibi: '+egg)
  let empty =[]
  for(let i=0; i < allPokemonData.length; i++){
      if(allPokemonData[i].egg===egg){
        empty.push(allPokemonData[i]);
      }
    }
    let showCardsComplete = document.getElementById("results");
    //limpia el html y empieza a imprimir segun el filtro
  showCardsComplete.innerHTML="";
  let pokemonCards="";


  empty.forEach((element=>{
    pokemonCards +=
    `<div class="cardStyle">
    <img src="${element.img}" alt="imagenPokemon">
    <h4>${element.name}</h4>
    </div>`
    showCardsComplete.innerHTML= pokemonCards;
  })) 
    };