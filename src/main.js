const ricks = RICKANDMORTY.results;
console.log(ricks);

document.getElementById("male").addEventListener("click", () => {
    //Al hacer click en el boton se me creara un div, img, p,
    
    for (let i=0; i<ricks.lenght; i++) { 
        

   
    let container = document.createElement("div");
    let img = document.createElement("img");
    let parraf = document.createElement("p");

    // Insertar el texto de la etiquetas img y p
    let textparraf = document.createTextNode(ricks[0].name);
    let imgconten = img.src = (ricks[0].image);

    //Inserta en el html asignando padres e hijos

    container.appendChild(textparraf, imgconten);

} }












    // document.getElementById("bringFilter").style.display = "block";

    // for (let i = 0; i < ricks.length; i++) {
    //     const spaceCards = document.createElement("section");
    //     const nameCards = document.createElement("h2");
    //     const maleCards = document.createElement("h3");

    // }





);