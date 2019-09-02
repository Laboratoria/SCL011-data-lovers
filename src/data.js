/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const data = () => {
    //imprimo mi Json en consola para verla y guiarme
    console.log(RICKANDMORTY.results);

    //Creo una variable boton y con el querySelector accedo a el valor  
    button = document.querySelector('[type="button"]');
    //Asigno el valor del nombre 
    nuevoItem = RICKANDMORTY.results[0].name;
    //Asino el valor de la imagen
    photo = RICKANDMORTY.results[0].image;
    // Defino el bloque donde voy a insertar la data
    dataElement = document.getElementById("element");

    //Le asigno el evento y la funcion al boton 
    button.addEventListener("click", anadir);
};

//esta funcion recibe un evento 
function anadir(e) {
    // guardo el evento
    evento = e || window.event;
    //si es vacio no me hace nada (borre el imput)
    if (nuevoItem.value == "") {
        evento.preventDefault();
    } else {
        //Creo los elementos 
        let name = document.createElement("p");
        let photo = document.createElement("IMG");

        //Asigno el contenido de name
        name.innerHTML = nuevoItem;

        //Asigno el contenido de photo


        //Agrego al html
        dataElement.appendChild(name);
        photo.setAttribute("src", RICKANDMORTY.results[0].image);
        dataElement.appendChild(photo);
        nuevoItem.value = "";
     }
 }

<<<<<<< HEAD

// window.onload = example;

};
=======
window.onload = data;
>>>>>>> 27bd1cd6daea33eb75adc4af440a418a928de6b9
