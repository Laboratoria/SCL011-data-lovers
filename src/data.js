 
const dataLOL= Object.values(LOL.data);
window.dataLOL = dataLOL;

const mostPower= (dataLOL)=>{
  let powered=[];
  
  //const getAttack= data["info"].attack === 10;
  for(let i =0; i<dataLOL.length; i++){
      
      let getAttack = dataLOL[i]["info"];
      let ataques = getAttack.attack;
      if(ataques === 10){
          powered.push(dataLOL[i]);
      }
      
      
  }
  return powered;
};
window.mostPower = mostPower;

const filterTags= (dataLOL,selectValue) =>{
  let result = dataLOL.filter(Element => {
    return Element.tags.includes(selectValue);
  });
  return result;

};
window.filterTags= filterTags;

const sortAZ= (dataLOL,selectSort) =>{
  let sortAZ="";

  if(selectSort=== "az"){
    sortAZ = dataLOL.sort((a,b)=>{
      return a.id.localeCompare(b.id)
    })
  }else {
    sortAZ=dataLOL.sort((a,b)=>{
      return b.id.localeCompare(a.id)
    })
  }
  return sortAZ;
}
window.sortAZ= sortAZ;

    window.sortData=sortData;
  