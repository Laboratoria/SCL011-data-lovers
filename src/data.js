/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// const data = () => {


//     //Creo una variable boton y con el querySelector accedo a el valor  
//     button = document.querySelector('[type="button"]');
//     nuevoItem = RICKANDMORTY.results[0].name;
//     photo = RICKANDMORTY.results[0].image;
//     genero = RICKANDMORTY.results[0].gender; 
//     dataElement = document.getElementById("element");

//     //Le asigno el evento y la funcion al boton 
//     button.addEventListener("click", anadir);
// };

// function anadir(e) {
//     // guardo el evento
//     evento = e || window.event;
//     //si es vacio no me hace nada (borre el imput)
//     if (nuevoItem.value == "") {
//         evento.preventDefault();
//     } else {
//         //Creo los elementos 
//         let name = document.createElement("p");
//         let photo = document.createElement("IMG");
//         let gender = document.createElement("p");


//         //Asigno el contenido de name
//         name.innerHTML = nuevoItem;

//         //Asigno el contenido de photo


//         //Agrego al html
//         dataElement.appendChild(name);
//         photo.setAttribute("src", RICKANDMORTY.results[0].image);
//         dataElement.appendChild(photo);
//       dataElement.appendChild(gender);

//         nuevoItem.value = "";
//      }
//  }

// window.onload = data;