 //Data completa

 const ricks = window.RICKANDMORTY.results;
 // window.ricks = ricks;


 //Data de Masculinos
 const characMale = window.filter.filterMale(ricks);


 //Data de Femeninos
 const characFemale = window.filter.filterFemale(ricks);

 //Data de Desconocido
 const characUnknown = window.filter.filterUnknown(ricks);

 //Data ordenada
 const ordenada = window.filter.orderdata(ricks);






 //Asignando botones a al id del html
 const btnmale = document.getElementById("male");
 const btnfemale = document.getElementById("female");
 const btnunknown = document.getElementById("unknown");
 const btnorder = document.getElementById("btnOrdenar");





 //Asignando eventos y funcion con argumento segun el tipo de genero a los botones. 
 btnmale.addEventListener("click", () => {
     showData('male');

 });
 btnfemale.addEventListener("click", () => {
     showData('female');
 });
 btnunknown.addEventListener("click", () => {
     showData('unknown');
 });

 btnorder.addEventListener("click", () => {
     showData("btnorder");
 });


 //Funcion que segun el argumento me va a cambiar la data
 const showData = (type) => {
     let dataSelected = [];
     if (type === "male") {
         dataSelected = characMale.slice();

     } else if (type === "female") {
         dataSelected = characFemale.slice();
         //console.log("seleccionaste female");

     } else if (type === "unknown") {
         dataSelected = characUnknown.slice();
         //console.log("seleccionaste unknown");

     } else if (type === "btnorder") {
         dataSelected = ordenada.slice();
     }

     const containerr = document.getElementById("container-cardss");

     for (let i = 0; i < dataSelected.length; i++) {
         //Creo elementos
         let card = document.createElement("div");
         let parraf = document.createElement("h3"); //Nombre
         let img = document.createElement("img"); //Imagen
         let specie = document.createElement("p"); //Especie
         let status = document.createElement("p"); //Estatus
         let origen = document.createElement("p"); //Origen
         let percent = document.createElement("p"); //Porcentaje

         // Asigno el valor de las etiquetas img y p
         // al usar i recorre todos 

         let name = document.createTextNode(dataSelected[i].name);
         let photo = (dataSelected[i].image);
         let specieT = document.createTextNode(dataSelected[i].species);
         let statusT = document.createElement(dataSelected[i].status);
         let origenT = document.createTextNode(dataSelected[i].origin.name);
         let percentTwo = document.createTextNode(dataSelected[i].status);

         //Asigno un atributo de tipo clase para darle estilo
         card.setAttribute("class", "card");
         // asignando padres e hijos
         parraf.appendChild(name);
         specie.appendChild(specieT);
         status.appendChild(statusT);
         origen.appendChild(origenT);
         percent.appendChild(percentTwo);
         //  text.appendChild(gender);
         img.setAttribute("src", photo);
         card.appendChild(parraf);
         card.appendChild(img);
         card.appendChild(specie);
         card.appendChild(status);
         card.appendChild(origen);
         card.appendChild(percent);

         //Mostrar tarjeta en el contenedor especifico

         containerr.appendChild(card);
         //containerr.appendChild(img);

     }

     document.getElementById("clear").addEventListener('click', () => {
         location.reload()
     });
 }