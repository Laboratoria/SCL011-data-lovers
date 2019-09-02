/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
    console.log(RICKANDMORTY.results[0].name);
    botonEnvio = document.querySelector('[type="button"]');

    // nuevoItem = document.querySelector('[type="text"]');
    nuevoItem = RICKANDMORTY.results[0].name;
    listaCompra = document.getElementById("listaCompra");

    botonEnvio.addEventListener("click", anadir);
};

function anadir(e) {
    evento = e || window.event;
    if (nuevoItem.value == "") {
        evento.preventDefault();
    } else {
        var lista = document.createElement("li");
        var x = document.createElement("IMG");
        lista.innerHTML = nuevoItem;
        // lista.addEventListener("dblclick",eliminarLi);
        listaCompra.appendChild(lista);
        x.setAttribute("src", RICKANDMORTY.results[0].image);
        document.body.appendChild(x);
        nuevoItem.value = "";
     }
 }


// window.onload = example;

};