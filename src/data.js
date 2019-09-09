
//funcion orden alfabetico ESTA AUN NO ME FUNCIONA
function sortAlphabetic(){
  const abcOrder = allPokemonOnData.sort((a,b)=>{
    if(a.name>b.name){
      return 1;
    } return -1;
  })
  console.log(abcOrder);
  };
  
  
  //funcion ordenar por tipo
  function filterPokemonType(type){
    let empty =[]
    for(let i=0; i < allPokemonOnData.length; i++){
      for(let j=0; j < allPokemonOnData[i].type.length; j++){
        if(allPokemonOnData[i].type[j]===type){
          empty.push(allPokemonOnData[i]);
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
    for(let i=0; i < allPokemonOnData.length; i++){
        if(allPokemonOnData[i].egg===egg){
          empty.push(allPokemonOnData[i]);
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
  