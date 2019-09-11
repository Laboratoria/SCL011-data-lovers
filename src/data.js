const orderABC=(allPokemonOnData, valorAbc) =>{
  let pokeNames= allPokemonOnData;
  if(valorAbc == "ABC"){
    pokeNames.sort((a,b)=>{
      if(a.name>b.name){
        return 1
      } return -1
    })
  }
  if(valorAbc == "XYZ"){
      pokeNames.sort((a,b)=>{
        if(a.name<b.name){
          return 1
        } return -1
      })
    }
  return pokeNames;
}

window.orderABC= orderABC;


const filterByType= (allPokemonOnData, valorType) =>{
  let typeFilter= allPokemonOnData.filter(element=>{
    return element.type.includes(valorType);
  })
  return typeFilter;
}

window.filterByType= filterByType;


const filterByEgg= (allPokemonOnData, valorEgg) =>{
  let eggFilter= allPokemonOnData.filter(element=>{
    return element.egg.includes(valorEgg);
  })
  return eggFilter;
}

window.filterByEgg= filterByEgg;
