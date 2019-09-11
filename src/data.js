 
const lolData= Object.values(LOL.data);
window.lolData = lolData;


  const container= document.getElementById("root");

  const mostPower= (data, getAttack)=>{
  let powered=[];

  data.reverse();

  let newPowered=[];

  for (let i = 0; i < data.length; i++) {
    if (data[i]["info"][getAttack] == 10) {
     newPowered.push(
       [
          [data[i].img],
          [data[i].id],
          [data[i]["info"].attack]
       ]
     );
    }
  }

  
  let element= document.getElementById("order").value
  console.log(element);
  if (element == "z-a"){
    newPowered.reverse();
  }


for (let i = 0; i < newPowered.length; i++) {
  
  root.innerHTML += `
  <div>
      <div id="img${[i]}">
          <img src="${newPowered[i][0]}">
      </div
      <div id="name${[i]}">
          <p>nombre:${newPowered[i][1]}</p>
      </div> 
      <div id="attack${[i]}">
      <p>Nivel Ataque:${newPowered[i][2]}</p>
  </div> 
  </div>`;


}

  return powered;
};
  const tags= (data, getFighter)=>{
    let fighter=[];
    for (let i = 0; i < data.length; i++){
      if (data[i]["tags"][getFighter]= "Fighter"){
        root.innerHTML += `
        <div>
          <div id="img${[i]}">
            <img src="${data[i].img}">
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
          <div id="img${[i]}">
            <img src="${data[i].img}">
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

    
    const sortData = (lolData, sortBy, sortOrder) => {

      let lolOrder = lolData;
      if (sortOrder == "a-z"){
        lolOrder.sort((a,b)=> {
          if (a[sortBy] < b[sortBy]) {return -1;}
          if (a[sortBy] > b[sortBy]) {return  1;}
          return 0;
        })
      }
    
      if (sortOrder == "z-a"){
        lolOrder.sort((a,b)=>{
          if (a[sortBy] > b[sortBy]) {return -1;}
          if (a[sortBy] < b[sortBy]) {return  1;}
          return 0;
        })
      
      }
      return lolOrder;
    };
    
  console.log(lolData.sort());