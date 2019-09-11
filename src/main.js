 //Data completa
 const ricks = RICKANDMORTY.results;


 //Data de Masculinos
 const characMale = window.filter.filterMale(ricks);

 //Data de Femeninos
 const characFemale = window.filter.filterFemale(ricks);

 //Data de Desconocido
 const characUnknown = window.filter.filterUnknown(ricks);




 //Asignando botones a al id del html
 const btnmale = document.getElementById("male");
 const btnfemale = document.getElementById("female");
 const btnunknown = document.getElementById("unknown");
 const btnorder = document.getElementById("btnOrdenar");

 //asignando boton de ordenar

 const btnselect = document.getElementById("order");

 //Escucho el evento change, que activara mi funcion
 //  btnselect.addEventListener("change", () => {
 //      for (i = 0; i < ricks.length; i++) {
 //          let orderdata = ricks[i];
 //          let prueba = orderdata.sort();
 //          console.log(prueba);
 //      }
 //  });









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

     }


     const containerr = document.getElementById("container-cardss");
     for (let i = 0; i < dataSelected.length; i++) {
         //Creo elementos
         let card = document.createElement("div");
         let parraf = document.createElement("p");
         let img = document.createElement("img");

         // Asigno el valor de las etiquetas img y p
         // al usar i recorre todos 

         let name = document.createTextNode(dataSelected[i].name);
         let photo = (dataSelected[i].image);

         //Asigno un atributo de tipo clase para darle estilo
         card.setAttribute("class", "card");
         // asignando padres e hijos
         parraf.appendChild(name);
         img.setAttribute("src", photo);
         card.appendChild(parraf);
         card.appendChild(img);
         //Mostrar tarjeta en el contenedor especifico

         containerr.appendChild(card);
         //containerr.appendChild(img);

     }
 }