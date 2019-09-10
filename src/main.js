//boton champion
const btnchampion = document.getElementById("btnchampion");
//funcion click
btnchampion.addEventListener("click",() =>{
    for (let i = 0; i < lolData.length; i++) {
        root.innerHTML += `
       <div>
            <div id="img${[i]}">
                <img src="${lolData[i].img}">
            </div>
            <div id="name${[i]}">
                <p>${lolData[i].id}</p>
            </div> 
        </div>`;
       //console.log(lolData[i].id);
       
    }
});

const btnMostPower = document.getElementById("btnMostPower");
btnMostPower.addEventListener("click",() =>{
    mostPower(lolData, "attack");
});

const btnFighter = document.getElementById("btnFighter");
btnFighter.addEventListener("click",() =>{
    tags(lolData, "Fighter");
});

const btnStats =document.getElementById("stats");
btnStats.addEventListener("click",()=>{
    stats(lolData, "stats");
});

const sortDataLol = document.getElementById("a-z");
sortDataLol.addEventListener("onchange",()=>{
    sortData(lolData, "z-a");
});