const ricks = RICKANDMORTY.results;

for ( let i=0; i < ricks.length;i++ ){ 
//Conectando mi id de html con mi js a traves de la variable containerr
let container = document.getElementById("element");

const btnmale = document.getElementById("male");



btnmale.addEventListener("click", () => {
     //Al hacer click en el boton se me creara un div, img, p,
    let parraf = document.createElement("p");
    let img = document.createElement("img");

    // Asigno el valor de las etiquetas img y p
    let name = document.createTextNode(ricks[i].name);
    let photo = (ricks[i].image);

    // asignando padres e hijos
    parraf.appendChild(name);

    img.setAttribute("src", photo);

    //Mostrar tarjeta en el contenedor especifico

    container.appendChild(parraf);
    container.appendChild(img);

}














    // document.getElementById("bringFilter").style.display = "block";

    // for (let i = 0; i < ricks.length; i++) {
    //     const spaceCards = document.createElement("section");
    //     const nameCards = document.createElement("h2");
    //     const maleCards = document.createElement("h3");

    // }



)}

