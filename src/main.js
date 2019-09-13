/* Manejo del DOM */
/* Manejo del DOM */
const data = POKEMON.pokemon;

const containerRoot = document.getElementById("root");
const selectType = document.getElementById("type");

//Mostrar toda la data en CARDS
const showData = (data) => {
    //Va ir guardado los datos entregados
    let result = "";
    //console.log(data);
    data.forEach(element => {
        //element -->DATA[i]
        //console.log(element.name);
        result = containerRoot.innerHTML += `
        <div>
        <div class="card">
        <div class="card-header">
            <div class="img">
                <img src="${element.img}">
            </div>
            <div class="card-body"
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





//Que se cargue solo esto en un principio
window.onload = showData(data);