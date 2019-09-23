/* Manejo del DOM */
const data = POKEMON.pokemon;
const containerRoot = document.getElementById("root");
const selectType = document.getElementById("type");

/* obtener el elemento segun su id*/
function mostrar() {
    document.getElementById("pantallaInicio").style.display = "block";
    document.getElementById("pantallaBienvenida").style.display = "none";
    document.getElementById("menu2").style.display = "none";
}
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
});

//Mostrar toda la data en tarjetas
const mostrarData = (data) => {
    //guardada los datos
    let result = "";
    console.log(data);
    data.forEach(element => {
        //element -->DATA[i]
        console.log(element.name);
        result = containerRoot.innerHTML += `
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
    return result;
}


window.onload = mostrar;
window.onload = mostrarData(data);