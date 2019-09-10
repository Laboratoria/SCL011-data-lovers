/* Manejo del DOM */
const lolData = Object.values(LOL.data);
window.lolData = lolData

const btnchampion = document.getElementById("btnchampion");
//funcion click
btnchampion.addEventListener("click",() =>{
    for (let i = 0; i < lolData.length; i++) {
    root.innerHTML += `
<div>
<div class="flip-card">
<div class="flip-card-front">
<div id="img${[i]}">
        <img src="${lolData[i].img}">
        </div>
        <div id="name${[i]}">
        <p>${lolData[i].id}</p>
        </div>
        </div>`;
        
    }
    })

  
    
    


  /* const selectlegends = document.getElementByI("lolselect")
    //funcion change
    selectlegends.addEventListener("change",() =>{
        const condition = selectlegends.value 
        let results = window.filterT(lolData, condition);
        document.getElementById("container").innerHTML=''; 
        
        createCards(results);  



    })

      /*  for (let i = 0; i < lolData.length; i++) {
            container.innerHTML += `

            <div class="flip-card">*/
  


  