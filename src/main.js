
//data convertida en arrays con este metodo lograremos
//llegar a los objetos como array
const lolData= Object.values(LOL.data);
//aca la hacemos global
window.lolData = lolData;
//creando un const para botón champion 
const btnchampion = document.getElementById("btnchampion");
//funcion click para botón champion
btnchampion.addEventListener("click",() =>{
  //al click pediremos que vacie nuestro div root
    document.getElementById("root").innerHTML= "";
    //recorremos la data
    for (let i = 0; i < lolData.length; i++) {
      //decimos que muestre en root html la imagen y nombre
        document.getElementById("root").innerHTML += `
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
   

//creamos const para botón más poderosos
const btnMostPower = document.getElementById("btnMostPower");
//al click pediremos que vacie el root
btnMostPower.addEventListener("click",() =>{
    document.getElementById("root").innerHTML= "";
    //constante con los mas poderosos 
    const poderosos = mostPower(lolData);
   //recorriendo los mas poderosos
   for (let i = 0; i < poderosos.length; i++) {
     //pedimos que nos muestre en root imagen nombre y nivel de ataque
    document.getElementById("root").innerHTML += `
   <div>
   <div class="flip-card">
   <div class="flip-card-inner">
   <div class="flip-card-front>
        <div id="img${[i]}">
        <img class="imagen" src="${poderosos[i].splash}">
        <div id="name${[i]}1">
        </div>
            <p>nombre: ${poderosos[i].id}</p>
            <p>ataque: ${poderosos[i].info.attack}</p>
        </div> 
      
    </div>`;
} 
});

// variable para los tipos 
let selectType= document.getElementById("tags");
//pedimos ke vacie el root en html
selectType.addEventListener("change",() =>{
    document.getElementById("root").innerHTML= "";
    //variable para almacenar el valor seleccionado
    let selectValue= selectType.value;
    // variable para almacenar resultado
    let selectResult= window.filterTags(lolData,selectValue);
    //recorriendo con for el resultado
    for (let i = 0; i < selectResult.length; i++) {
      //peidmos que muestre en root imagen foto nombre y tipo
        document.getElementById("root").innerHTML += `
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

// variable para guardar el select de ordenar
let selectOrder= document.getElementById("order");
//al oir el cambio que vacie root en html
selectOrder.addEventListener("change",() =>{
    document.getElementById("root").innerHTML= "";
    //variable que guarda el valor seleccionado en el select
    let selectValue= selectOrder.value;
    //variable que guardara el resultado
    let selectResult= window.sortAZ(lolData,selectValue);
    //recorra la variable result y mostrar en html imagen nombre y tipos
    for (let i = 0; i < selectResult.length; i++) {
        document.getElementById("root").innerHTML += `
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
// constante para botón mas información
const btnStats =document.getElementById("stats");
//funcion para boton mas info
btnStats.addEventListener("click",()=>{
  //al click vaciará el root
  document.getElementById("root").innerHTML="";
  //recorremos la data
    for (let i = 0; i < lolData.length; i++) {
      //pediremos que muestre en html nombre imagen y mas info
        document.getElementById("root").innerHTML +=`
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