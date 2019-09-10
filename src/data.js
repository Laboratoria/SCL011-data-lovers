const lolData= Object.values(LOL.data);
window.lolData = lolData;


  const container= document.getElementById("root");

  const mostPower= (data, getAttack)=>{
  let powered=[];
  for (let i = 0; i < data.length; i++) {
    if (data[i]["info"][getAttack] == 10) {
      root.innerHTML += `
        <div>
            <div id="img${[i]}">
                <img src="${data[i].img}">
            </div>
            <div id="name${[i]}">
                <p>nombre:${data[i].id}</p>
            </div> 
            <div id="attack${[i]}">
            <p>Nivel Ataque:${data[i]["info"].attack}</p>
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

  const stats=(data,getStats)=>{
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

    const sortData = (data, sortBy, sortOrder) => {

      let lolOrder = data;
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
    
    //const li = document.createElement(li);
    //let textLi = document.createTextNode(data[i]);
    //li.appendChild(textLi);
    //container.appendChild(li);




// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// const nombrex = () => {

  // return ;
// };
window.mostPower = mostPower;

window.LOL = LOL;

