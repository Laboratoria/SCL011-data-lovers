
//boton champion

const btnchampion = document.getElementById("btnchampion");
//funcion click
btnchampion.addEventListener("click",() =>{
    for (let i = 0; i < lolData.length; i++) {
        root.innerHTML += `
       <div>
       <div class="flip-card">
       <div class="flip-card-front>
            <div id="img${[i]}">
                <img class="imagen" src="${lolData[i].splash}">
            </div>
            <div id="name${[i]}">
                <p>${lolData[i].id}</p>
            </div> 
        </div>`;

      

    }
});
       
   

const btnMostPower = document.getElementById("btnMostPower");
btnMostPower.addEventListener("click",() =>{
    document.getElementById("root").innerHTML="";
    mostPower(lolData, "attack");
});

const btnFighter = document.getElementById("btnFighter");
btnFighter.addEventListener("click",() =>{
    tags(lolData, "Fighter");
});

const btnStats =document.getElementById("stats");
btnStats.addEventListener("click",()=>{
    document.getElementById("root").innerHTML="";
    stats(lolData, "stats");
});




const sortDataLol = document.getElementById("a-z");
sortDataLol.addEventListener("onchange",()=>{
    sortData(lolData, "z-a");



  
});
