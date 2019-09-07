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

 //Asignando eventos a los botones
 btnmale.addEventListener("click", () => {
     showData('male');
 });
 btnfemale.addEventListener("click", () => {
     showData('female');
 });
 btnunknown.addEventListener("click", () => {
     showData('unknown');
 });


 const showData = (type) => {
     let dataSelected = [];
     if (type === "male") {
         dataSelected = characMale.slice();
         console.log(dataSelected);
     } else if (type === "female") {
         dataSelected = characFemale.slice();
         //console.log("seleccionaste female");
         console.log(dataSelected);
     } else if (type === "unknown") {
         dataSelected = characUnknown.slice();
         //console.log("seleccionaste unknown");
         console.log(dataSelected);
     }

     for (let i = 0; i < dataSelected.length; i++) {
         //Creo elementos
         let parraf = document.createElement("p");
         let img = document.createElement("img");

         // Asigno el valor de las etiquetas img y p
         // al usar i recorre todos 
         let name = document.createTextNode(dataSelected[i].name);
         let photo = (dataSelected[i].image);

         // asignando padres e hijos
         parraf.appendChild(name);

         img.setAttribute("src", photo);

         //Mostrar tarjeta en el contenedor especifico

         container.appendChild(parraf);
         container.appendChild(img);
     }
 }