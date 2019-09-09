  
//funcion orden alfabetico ESTA AUN NO ME FUNCIONA
function sortAlphabetic(){
const abcOrder = allPokemonData.sort((a,b)=>{
  if(a.name>b.name){
    return 1;
  } return -1;
})
console.log(abcOrder);
};


//funcion ordenar por tipo
function filterPokemonType(type){
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
