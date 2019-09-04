
// document.getElementById("lolData").innerHTML= "";
=======

const lolData = Object.values(LOL.data);

/* Manejo del DOM */

const lolData = window.LEAGUEOFLEGENDS.result;

const container = document.getElementById("root");
document.getElementById(leagueoflegends).addEventListener("click",() =>{

const result = legendsFilter(lolData,legendsFilter);
container.innerHTML = "";

result.forEach(element => {
    container.innerHTML += 
    
    `<div class="flip-card">
        <div class="flip-card-inner">

        <div class="flip-card-front">
        < div img id="img-card" src={element.image} alt="Imagen">     
   <h4>${element.name}</h4> 
   <p>${element.attack}</p>
   <p>${element.defense}</p>
   <p>${element.magic}</p>
   <p>${Element.difficulty}</p>
   <p>${element.tags}</p>
   <p>${element.partype}</p>
    
   </div>
   </div>
    </div>
    </div>`
});

