/* Manejo del DOM */
const lolData = Object.values(LOL.data);
window.lolData = lolData

const btnchampion = document.getElementById("btnchampion");
//funcion click
btnchampion.addEventListener("click",() =>{
    for (let i = 0; i < lolData.length; i++) {
    root.innerHTML += `

        <img src="${lolData[i].img}">`
        
    }
    })

