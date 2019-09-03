/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const dataArray= (dataLOL) => {

  return Object.values(dataLOL["data"]) ;
};

const mostPawer =(data,getAttack)=>{
  let pawued=[];
  for(let i = 0; i < data.length; i ++){
    if(data[i]["info"][getAttack]==10){
      pawued.push(data[i]);
    }
  }
}
window.LOL = LOL;
