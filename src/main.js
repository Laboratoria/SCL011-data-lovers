
const takeData = window.STEAM.appnews.newsitems;
let buttonFilters = document.getElementsByClassName("btnfilters");
let valueButton = "";

for (let j = 0; j<takeData.length;j++){
    let newsCards = document.createElement("div");
    newsCards.className =  "cards";
    let titleNews= takeData[j].title;
    let contentNews = takeData[j].contents;
    let dateNews = new Date(parseInt(takeData[j].date) * 1000);
    let urlNews = takeData[j].url
    newsCards.innerHTML += `<h2>${titleNews}</h2>`
    newsCards.innerHTML += `<p>${contentNews}</p>`
    newsCards.innerHTML += `<a class="url" href=${urlNews}>Leer Mas...</a>`
     newsCards.innerHTML += `<p class="date">${dateNews}</p>`

    document.getElementById("content").appendChild(newsCards).innerHTML;
}

let renderNews =(data)=>{
  document.getElementById("content").innerHTML = ""
    for (let j = 0; j<data.length;j++){
        let newsCards = document.createElement("div");
        newsCards.className =  "cards";
        let titleNews= data[j].title;
        let contentNews = data[j].contents;
        let dateNews = new Date(parseInt(data[j].date) * 1000);
        let urlNews = data[j].url
        newsCards.innerHTML += `<h2>${titleNews}</h2>`
        newsCards.innerHTML += `<p>${contentNews}</p>`
        newsCards.innerHTML += `<a class="url" href=${urlNews}>Leer Mas...</a>`
        newsCards.innerHTML += `<p class="date">${dateNews}</p>`
        document.getElementById("content").appendChild(newsCards).innerHTML;
    }
}


for (let i = 0; i < buttonFilters.length; i++){
    buttonFilters[i].addEventListener ('click',()=>{
        valueButton = buttonFilters[i].value
       if(valueButton==="feedlabel"){
        let btnAll = window.filterData.filter(takeData, valueButton);
        renderNews(btnAll)
       }
        if (valueButton==="TF2 Blog"){
            let tf2Btn= window.filterData.filter(takeData, valueButton);
           renderNews(tf2Btn)
        }
        if (valueButton ==="Product Update"){
            let updateBtn =  window.filterData.filter(takeData, valueButton);
            renderNews(updateBtn)
        }
        if(valueButton=== "PC Gamer"){
            let pcBtn = window.filterData.filter(takeData, valueButton);
            renderNews(pcBtn);
        }
        if (valueButton==="Eurogamer"){
            let euroBtn = window.filterData.filter(takeData, valueButton);
            renderNews (euroBtn);
        }
        if (valueButton==="Rock, Paper, Shotgun"){
           let rspBtn =  window.filterData.filter(takeData, valueButton);
           renderNews(rspBtn);
          }
    })
};

let selectSort = document.getElementById("orderSelect");
selectSort.addEventListener ('change', ()=>{
    let selectValue = selectSort.options[selectSort.selectedIndex].value;
    if (selectValue=== "ascendente") {
        
        let ascendente= window.filterData.sortByDate(takeData)
        console.log(ascendente)
        
    }
})
