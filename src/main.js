//utiliza la info guardada en Json.
fetch("https://raw.githubusercontent.com/mariaPazBeltran/SCL011-data-lovers/master/src/data/steam/steam.json")
.then(response => {
   return response.json()})
    //console.log( response.json())})
    .then(data1=>{
        //declaramos una variable con la que podremos acceder a la data
        const takeData = data1.appnews.newsitems;
        console.log(takeData)
  



//declaramos una variable que contenga los botones
let buttonFilters = document.getElementsByClassName("btnfilters");
// declaramos una variable vacia a la cual luego le concatenaremos el valor de los botones de filtrado
let valueButton = "";
// declaramos una variable vacía a la que le sumamos los valores de cada filtrado para así conectar filtrado con el orden
let resultadoFor = "";
//declaramos variable vacía para luego usarla para conectar estadisticas, filtrado y tarjetas.
let statisticsNews = "";


// Llamar base de datos y dejar info en tarjetas nuevas... esta se despliega apenas el usuario ingrese a la Página
for (let j = 0; j<takeData.length;j++){
    let newsCards = document.createElement("div");
    newsCards.className =  "cards";
    let imgNews = takeData[j].img;
    let titleNews= takeData[j].title;
    let contentNews = takeData[j].contents;
    let dateNews = new Date(parseInt(takeData[j].date) * 1000);
    let urlNews = takeData[j].url
    newsCards.innerHTML += `<img class="imgCards" src=${imgNews}></img>`
    newsCards.innerHTML += `<h2>${titleNews}</h2>`
    newsCards.innerHTML += `<p>${contentNews}</p>`
    newsCards.innerHTML += `<a target="_blank" class="url" href=${urlNews}>Leer más</a>`
     newsCards.innerHTML += `<p class="date">${dateNews}</p>`

    document.getElementById("content").appendChild(newsCards).innerHTML;
}

// Función que crea tarjetas para aplicarlas tanto en el filtro como en el orden
let renderNews =(data)=>{
  document.getElementById("content").innerHTML = ""
    for (let j = 0; j<data.length;j++){    
         let newsCards = document.createElement("div");
        newsCards.className =  "cards";
        let imgNews = data[j].img;
        let titleNews= data[j].title;
        let contentNews = data[j].contents;
        let dateNews = new Date(parseInt(data[j].date) * 1000);
        let urlNews = data[j].url
        newsCards.innerHTML += `<img class="imgCards" src=${imgNews}></img>`
        newsCards.innerHTML += `<h2>${titleNews}</h2>`
        newsCards.innerHTML += `<p>${contentNews}</p>`
        newsCards.innerHTML += `<a class="url" href=${urlNews}>Leer más</a>`
        newsCards.innerHTML += `<p class="date">${dateNews}</p>`
        document.getElementById("content").appendChild(newsCards).innerHTML;
    }
}
/* buttonFilters en la manera con la que el usuario filtra las noticias.
 Además Toma el valor de cada botón. 'resultadoFor' guarda valor para estadística y orden*/
for (let i = 0; i < buttonFilters.length; i++){
    buttonFilters[i].addEventListener ('click',()=>{
        valueButton = buttonFilters[i].value
       if(valueButton==="feedlabel"){
        let btnAll = window.filterData.filter(takeData, valueButton);
        renderNews(btnAll)
        resultadoFor=btnAll;
       }
        if (valueButton==="TF2 Blog"){
            let tf2Btn= window.filterData.filter(takeData, valueButton);
           renderNews(tf2Btn)
           resultadoFor=tf2Btn
        }
        if (valueButton ==="Product Update"){
            let updateBtn =  window.filterData.filter(takeData, valueButton);
            renderNews(updateBtn)
            resultadoFor=updateBtn
        }
        if(valueButton=== "PC Gamer"){
            let pcBtn = window.filterData.filter(takeData, valueButton);
            renderNews(pcBtn);
            resultadoFor=pcBtn
        }
        if (valueButton==="Eurogamer"){
            let euroBtn = window.filterData.filter(takeData, valueButton);
            renderNews (euroBtn);
            resultadoFor=euroBtn
        }
        if (valueButton==="Rock, Paper, Shotgun"){
           let rspBtn =  window.filterData.filter(takeData, valueButton);
           renderNews(rspBtn);
           resultadoFor=rspBtn
          }
          // aquí unimos las funciones de filtrado, tarjetas y estadisticas para que estas ultimas se muestren
    statisticsNews =window.filterData.statistics(resultadoFor, takeData, valueButton);
    document.getElementById("statisticsContent").innerHTML = `<p id="percentNews">${statisticsNews}% de las Noticias</p>`
    })
 }

//le damos uso al select el cúal se conecta con la función de ordenar por fecha.
let selectSort = document.getElementById("orderSelect");
selectSort.addEventListener ('change', ()=>{
    let ascendente = window.filterData.sortByDate(resultadoFor,  document.getElementById("orderSelect").value)
    renderNews(ascendente);
})
});