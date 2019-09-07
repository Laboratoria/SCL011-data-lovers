const ricks = RICKANDMORTY.results;
const characMale = window.filter.filterMale(ricks);
const characFemale = window.filter.filterFemale(ricks);
const characUnknown = window.filter.filterUnknown(ricks);

//acá recorre todos los elementos y los imprime en pantalla

for (let i = 0; i < characMale.length; i++) {
    //Conectando mi id de html con mi js a traves de la variable containerr
    let container = document.getElementById("element");

    const btnmale = document.getElementById("male");



    btnmale.addEventListener("click", () => {
            //Al hacer click en el boton se me creara un div, img, p,
            let parraf = document.createElement("p");
            let img = document.createElement("img");

            // Asigno el valor de las etiquetas img y p
            // al usar i recorre todos 
            let name = document.createTextNode(characMale[i].name);
            let photo = (characMale[i].image);

            // asignando padres e hijos
            parraf.appendChild(name);

            img.setAttribute("src", photo);

            //Mostrar tarjeta en el contenedor especifico

            container.appendChild(parraf);
            container.appendChild(img);

        }


    )
}