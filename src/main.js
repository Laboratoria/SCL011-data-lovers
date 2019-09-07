const ricks= RICKANDMORTY.results;

// acá recorre todos los elementos y los imprime en pantalla

for ( let i=0; i < ricks.length;i++ ){ 
//Conectando mi id de html con mi js a traves de la variable containerr
let container = document.getElementById("element");

const btnmale = document.getElementById("male");

btnmale.addEventListener("click", () => {
     //Al hacer click en el boton se me creara un div, img, p,
    let parraf = document.createElement("p");
    let img = document.createElement("img");
    let genero = document.createElement("p");

    // Asigno el valor de las etiquetas img y p
    // al usar i recorre todos 
    let name = document.createTextNode(ricks[i].name);
    let photo = (ricks[i].image);
    let gender = document.createTextNode(ricks[i].gender);

    // asignando padres e hijos
    parraf.appendChild(name);

    img.setAttribute("src", photo);

    genero.appendChild(gender);

    //Mostrar tarjeta en el contenedor especifico

    container.appendChild(parraf);
    container.appendChild(img);
    container.appendChild(genero);

}















    // document.getElementById("bringFilter").style.display = "block";

    // for (let i = 0; i < ricks.length; i++) {
    //     const spaceCards = document.createElement("section");
    //     const nameCards = document.createElement("h2");
    //     const maleCards = document.createElement("h3");

    // }



)}

