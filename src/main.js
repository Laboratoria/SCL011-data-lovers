//data global
const lolData= Object.values(LOL.data);
window.lolData = lolData;
//boton champion
const btnchampion = document.getElementById("btnchampion");
//funcion click
btnchampion.addEventListener("click",() =>{
    document.getElementById("root").innerHTML= "";
    for (let i = 0; i < lolData.length; i++) {
        root.innerHTML += `
       <div>
       <div class="flip-card">
       <div class="flip-card-inner">
       <div class="flip-card-front>
            <div id="img${[i]}">
            <img class="imagen" src="${lolData[i].splash}">
            <div id="name${[i]}1">
            </div>
                <p>${lolData[i].id}</p>
                
            </div> 
        </div>`;
    } 
    });
   


const btnMostPower = document.getElementById("btnMostPower");
btnMostPower.addEventListener("click",() =>{
    document.getElementById("root").innerHTML= "";
    const poderosos = mostPower(lolData);
   
   for (let i = 0; i < poderosos.length; i++) {
    root.innerHTML += `
   <div>
   <div class="flip-card">
   <div class="flip-card-inner">
   <div class="flip-card-front>
        <div id="img${[i]}">
        <img class="imagen" src="${poderosos[i].splash}">
        <div id="name${[i]}1">
        </div>
            <p>${poderosos[i].id}</p>
            <p>${poderosos[i].info.attack}</p>
        </div> 
      
    </div>`;
} 
});

let selectType= document.getElementById("tags");
selectType.addEventListener("change",() =>{
    document.getElementById("root").innerHTML= "";
    let selectValue= selectType.value;
    let selectResult= window.filterTags(lolData,selectValue);
    for (let i = 0; i < selectResult.length; i++) {
        root.innerHTML += `
       <div>
       <div class="flip-card">
       <div class="flip-card-inner">
       <div class="flip-card-front>
            <div id="img${[i]}">
            <img class="imagen" src="${selectResult[i].splash}">
            <div id="name${[i]}1">
            </div>
                <p>${selectResult[i].id}</p>
                <p>${selectResult[i].tags}</p>
            </div> 
          
        </div>`;
    } 
});

let selectOrder= document.getElementById("order");
selectOrder.addEventListener("change",() =>{
    document.getElementById("root").innerHTML= "";
    let selectValue= selectOrder.value;
    let selectResult= window.sortAZ(lolData,selectValue);
    for (let i = 0; i < selectResult.length; i++) {
        root.innerHTML += `
       <div>
       <div class="flip-card">
       <div class="flip-card-inner">
       <div class="flip-card-front>
            <div id="img${[i]}">
            <img class="imagen" src="${selectResult[i].splash}">
            <div id="name${[i]}1">
            </div>
                <p>${selectResult[i].id}</p>
                <p>${selectResult[i].tags}</p>
            </div> 
          
        </div>`;
    } 
});

const btnStats =document.getElementById("stats");
btnStats.addEventListener("click",()=>{
    for (let i = 0; i < lolData.length; i++) {
      
        root.innerHTML +=`
        <div>
        <div class="flip-card">
        <div class="flip-card-front>
          <div id="img${[i]}">
          <img class="imagen" src="${lolData[i].splash}">
          </div>
          <div id="name${[i]}">
          <p>${lolData[i].id}</p>
          </div> 
          <div id="stats${[i]}">
            <p>Nivel de vida:${lolData[i]["stats"].hp}</p>
          </div>
          <div id="stats${[i]}">
            <p>Máximo nivel:${lolData[i]["stats"].hpperlevel}</p>
          </div>
          <div id="stats${[i]}">
            <p>velocidad:${lolData[i]["stats"].movespeed}</p>
          </div>
          <div id="stats${[i]}">
            <p>armadura:${lolData[i]["stats"].armor}</p>
          </div>
          <div id="stats${[i]}">
            <p>Bloqueo de Hechizos:${lolData[i]["stats"].spellblock}</p>
          </div>
          <div id="stats${[i]}">
            <p>Rango de Ataque:${lolData[i]["stats"].attackrange}</p>
          </div>
          <div id="stats${[i]}">
            <p>Daño de Ataque:${lolData[i]["stats"].attackdamage}</p>
          </div>
          
        </div>`;
      }
});