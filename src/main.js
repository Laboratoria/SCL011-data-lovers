/* Manejo del DOM */
const data = window.POKEMON.pokemon;
const containerRoot = document.getElementById("root");
const selectType = document.getElementById("type");


//Mostrar toda la data en tarjetas
const mostrarData = (data) => {
    data.forEach(element => {
        containerRoot.innerHTML += `
        <div>
        <div class="tarjeta">
        <div class="tarjeta-header">
            <div class="img">
                <img src="${element.img}">
            </div>
            <div class="tarjeta-body"
            <h3>${element.num}</h3>
            <h2>${element.name}</h2>
            <p>${element.type}</p>
            </div>
        </div>
        </div>
        </div> `

    });
}

/* obtener el elemento y mostrar segun su id*/
document.getElementById("pantallaInicio").style.display = "block";
document.getElementById("pantallaBienvenida").style.display = "none";
document.getElementById("menu2").style.display = "none";

document.getElementById("next").addEventListener('click', (evento) => {
    evento.preventDefault();
    document.getElementById("pantallaInicio").style.display = "none";
    document.getElementById("pantallaBienvenida").style.display = "block";
    document.getElementById("menu2").style.display = "none";
});
document.getElementById("ir").addEventListener('click', (evento) => {
    evento.preventDefault();
    document.getElementById("pantallaInicio").style.display = "none";
    document.getElementById("pantallaBienvenida").style.display = "none";
    document.getElementById("menu2").style.display = "block";
    mostrarData(data);
});

//Filtrar
selectType.addEventListener("change", () => {
    let typeP = document.getElementById("type").value;
    let printTypeP = window.data.filterPokemons(data, typeP);
    document.getElementById("root").innerHTML = " ";
    mostrarData(printTypeP);
});



//window.onload = mostrarData(data);