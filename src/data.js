 
const lolData= Object.values(LOL.data);
window.lolData = lolData;


  const container= document.getElementById("root");

  const mostPower= (data, getAttack)=>{
  let powered=[];
  for (let i = 0; i < data.length; i++) {
    if (data[i]["info"][getAttack] == 10) {
      root.innerHTML += `
        <div>
        <div class="flip-card">
        <div class="flip-card-front>
            <div id="img${[i]}">
            <img class="imagen" src="${lolData[i].splash}">
            </div>
            <div id="name${[i]}">
                <p>nombre:${data[i].id}</p>
            </div> 
            <div id="attack${[i]}">
          
        </div> 
        </div>`;
    };
  }
  return powered;
};
  const tags= (data, getFighter)=>{
    let fighter=[];
    for (let i = 0; i < data.length; i++){
      if (data[i]["tags"][getFighter]= "Fighter"){
        root.innerHTML += `
        <div>
        <div class="flip-card">
        <div class="flip-card-front>
          <div id="img${[i]}">
          <img class="imagen" src="${lolData[i].splash}">
          </div>
          <div id="name${[i]}">
            <p>nombre:${data[i].id}</p>
          </div> 
          <div id="tags${[i]}">
            <p>tipo:${data[i].tags}</p>
          </div>
        </div>`;
      };
    };
    return fighter;
  
  };

  const stats=(data,)=>{
    let information=[];
    for (let i = 0; i < data.length; i++) {
      
        root.innerHTML +=`
        <div>
        <div class="flip-card">
        <div class="flip-card-front>
          <div id="img${[i]}">
          <img class="imagen" src="${lolData[i].splash}">
          </div>
          <div id="name${[i]}">
          <p>${data[i].id}</p>
          </div> 
          <div id="stats${[i]}">
            <p>Nivel de vida:${data[i]["stats"].hp}</p>
          </div>
          <div id="stats${[i]}">
            <p>Máximo nivel:${data[i]["stats"].hpperlevel}</p>
          </div>
          <div id="stats${[i]}">
            <p>velocidad:${data[i]["stats"].movespeed}</p>
          </div>
          <div id="stats${[i]}">
            <p>armadura:${data[i]["stats"].armor}</p>
          </div>
          <div id="stats${[i]}">
            <p>Bloqueo de Hechizos:${data[i]["stats"].spellblock}</p>
          </div>
          <div id="stats${[i]}">
            <p>Rango de Ataque:${data[i]["stats"].attackrange}</p>
          </div>
          <div id="stats${[i]}">
            <p>Daño de Ataque:${data[i]["stats"].attackdamage}</p>
          </div>
          
        </div>`;
      };
      return information;
    }


    const sortData = (LOL,valuselet) => {

      let lolOrder = LOL;
      if (valuselet == "a-z"){
        lolOrder.sort((a,b)=> {
        if(a.id>b.id){
          return 1
        }
        return -1
        })
      
      }
    
      if (valuselet == "z-a"){
        lolOrder.sort((a,b)=> {
        if(a.id<b.id){
          return 1
        }
        return -1
        })
      
      }

        
    
      console.log(lolOrder);
    };
    window.sortData=sortData;
    //en el main 
    //let ordenados = window.sortData(dataMain, valorSelect)
  
 /* const container = document.getElementById('root');
    const selectname = document.getElementById('name');
    let sortlol = (LOLData,sortBy,sortOrder)=> {
     let orderaLol = LOLData;
     if (sortOrder == "a-z"){
    orderaLol.sort((a,b)=> {
     if (a[sortBy] < b[sortBy]) {return -1;}
     if (a[sortBy] > b[sortBy]) {return  1;}
     return 0;
    })
    }
    if (sortOrder == "z-a"){
      orderaLol.sort((a,b)=> {
       if (a[sortBy] > b[sortBy]) {return -1;}
       if (a[sortBy] < b[sortBy]) {return  1;}
       return 0;
      })
    }
    return orderaLol;
    }


const computeStats = (LOLData,type) => {
  let calculateResult = filterLOL(LOLData,type).length;  
  return calculateResult;

 }

 window.computeStats = computeStats;*/




