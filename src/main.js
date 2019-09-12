
//boton champion

const btnchampion = document.getElementById("btnchampion");
//funcion click
btnchampion.addEventListener("click",() =>{
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

const selet = document.getElementById("order");
selet.addEventListener('change',()=>{
    const valuselet = selet.value;
    let resultselet = window.sortData(LOL,valuselet);
    root.innerHTML
})


  


