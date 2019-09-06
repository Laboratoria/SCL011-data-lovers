window.filterData={
  filter: (takeData)=>{
      
      let concatenartf2="";
      let concatenarUpdate="";
      let concatenarPcgamer="";
      let concatenarEurogamer="";
      let concatenarRps = "";
     // arrow =[concatenartf2,concatenarUpdate,concatenarPcgamer,concatenarEurogamer,concatenarRps];
     
     for (let i=0; i<takeData.length;i++){
      let changesData = document.createElement("div")
      changesData.className="create-cards"
      let newsCards = document.createElement("div");
      newsCards.className =  "cards";
      let titleData= document.createElement("h4")
      titleData.textContent= takeData[i].title
      //console.log (titleData)
      let newsContent= document.createElement("p");
      let textNewContent = document.createTextNode(takeData[i].contents);
      newsContent.appendChild(textNewContent);
      //newsContent.textContent= takeData[i].contents
      //console.log(newsContent)
      // armemos
      const contenedor = document.getElementById("conte");
      contenedor.innerHTML=
      `<p>${takeData[i].contents}</p>`
      changesData.appendChild(newsCards);
      newsCards.appendChild(titleData)
      newsCards.appendChild(newsContent)
      console.log(newsCards.appendChild(newsContent))
      const design = document.getElementById("content").appendChild(changesData);
         //const arrow =[];
              if (takeData[i].feedlabel =="TF2 Blog"){
              concatenartf2+= design;
             // finalResult = concatenartf2;
          }
          if (takeData[i].feedlabel=="Product Update"){
              concatenarUpdate+= design;
              //inalResult = concatenarUpdate;
              //console.log(concatenarUpdate)
          }
        if (takeData[i].feedlabel==="PC Gamer"){
            concatenarPcgamer+= design;
            //finalResult = concatenarPcgamer;
           // console.log(concatenarPcgamer)
        }
        if (takeData[i].feedlabel==="Eurogamer"){
          concatenarEurogamer+= design;
          //finalResult=concatenarEurogamer;
          //console.log(concatenarEurogamer)
        }
        if (takeData[i].feedlabel==="Rock, Paper, Shotgun"){
            concatenarRps+= design;
           // finalResult=concatenarRps;
         // console.log(concatenarRps); 
        }
       
      }return {concatenartf2,concatenarUpdate,concatenarPcgamer,concatenarEurogamer,concatenarRps}
      //console.log(concatenartf2)
  }
};

// pruebas de dar forma a la data