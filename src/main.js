/* Manejo del DOM */

/*document.getElementById("btnActive").addEventListener("click", 
function timeConverter(){
    let date = new Date(1540494720 * 1000); //takeData.date - hay que tirarlo a la lógica
    console.log(date);

  })*/
  
const takeData = STEAM.appnews.newsitems;

//btn
const blogtf2btn = document.getElementById("blogtf2")
blogtf2btn.addEventListener ('click',()=>{
    document.getElementById("content").innerHTML = window.filterData.filter(takeData).concatenartf2;
})
const steambtn = document.getElementById("steam")
steambtn.addEventListener ('click',()=>{
    document.getElementById("content").innerHTML = window.filterData.filter(takeData).concatenarUpdate;
})
const eurobtn = document.getElementById("euro")
eurobtn.addEventListener ('click',()=>{
    document.getElementById("content").innerHTML = window.filterData.filter(takeData).concatenarEurogamer;
})
const pcbtn = document.getElementById("PC")
pcbtn.addEventListener ('click',()=>{
    document.getElementById("content").innerHTML = window.filterData.filter(takeData).concatenarPcgamer;
})
const rpsbtn = document.getElementById("rps")
rpsbtn.addEventListener ('click',()=>{
    document.getElementById("content").innerHTML = window.filterData.filter(takeData).concatenarRps;
})
