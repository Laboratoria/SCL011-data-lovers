 //data global
const dataLOL= Object.values(LOL.data);
window.dataLOL = dataLOL;
//función para botón más poderosos
const mostPower= (dataLOL)=>{
  //creando array vacio 
  let powered=[];
  //recorriendo la data
  for(let i =0; i<dataLOL.length; i++){
      //creando variable que almacena la info de data
      let getAttack = dataLOL[i]["info"];
      //creando variable que almacena ataque
      let ataques = getAttack.attack;
      //damos la condicionalida que ataque sea igual a 10
      if(ataques === 10){
        //acá decimos que suba los ataques igual a 10 que encontró en el recorrido
        //a nuestro array vacío
          powered.push(dataLOL[i]);
      }
      
      
  }
  //que retorne este array con los más poderosos
  return powered;
};
//mostpower global
window.mostPower = mostPower;

//función para filtrar por tipos en el select
//se crea una constante con los parametros dataLOL y que trabajará 
//con el valor seleccionado por el usuario
const filterTags= (dataLOL,selectValue) =>{
  //se crea variable que filtrará la data buscando el elemento que se indica
  //este elemento será el valor seleccionado y le diremos que lo incluya
  let result = dataLOL.filter(Element => {
    return Element.tags.includes(selectValue);
  });
  //pedimos que retorne esta variable 
  return result;

};
//filterTags global
window.filterTags= filterTags;

//función para ordenar de la a a la z
//fijamos los dos parámetros: la data y selectSort
const sortAZ= (dataLOL,selectSort) =>{
  //creamos variable vacia para ordenar de la a a la z
  let sortAZ="";
  //damos la condicionalidad que si el usuario selecciona de la a a la z
  if(selectSort=== "az"){
    //sort az tendra dos parametros a y b
    sortAZ = dataLOL.sort((a,b)=>{
      //nos retornará el id ordenando de la a a la z con el metodo localecompare
      return a.id.localeCompare(b.id)
    })
    //si el usuario no selecciona "az" se ejecutará lo contrario
    //que sería de la z a la a
  }else {
    sortAZ=dataLOL.sort((a,b)=>{
      return b.id.localeCompare(a.id)
    })
  }
  //retornará la variable con los elementos ordenados según el usuario seleccionó
  return sortAZ;
}
// sortAZ global
window.sortAZ= sortAZ;


  