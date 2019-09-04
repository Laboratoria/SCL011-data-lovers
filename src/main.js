/* Manejo del DOM */
let listOfCharacters = RICKANDMORTY.results;

const container = document.getElementById('root')
//sacar y mostarar datos
const botoncito = document.getElementById('test');
botoncito.addEventListener('click', () => {
    
    const el = document.getElementById('ulItem');
    el.innerHTML =
        listOfCharacters.map(x => {
            console.log(x)
            return `
                <li class="liItem">
                    <img src="${x.image}">
                    <div class="charData">
                        Nombre: ${x.name}
                        Genero: ${x.gender}
                        Estado: ${x.status} 
                        Origen: ${x.location.name}
                    </div>    
                </li>
            `;
        }).join('');

});

//const filterCharacters = listOfCharacters.filter(listOfCharacters => listOfCharacters.length > 11);
//console.log(filterCharacters);

// filtar datos
// const lala = listOfCharacters.filter( (e) => {
//     return (e.status === 'Alive');
// });

// for (let i = 0; i < lala.length; i++) {
//     let filtroName = lala[i].name;
//     // console.log(filtroName);

// }



// // ordenar Datos
// const listOfCharactersOrder = listOfCharacters.sort((a, b) => {
//     return (a.name < b.name) ? -1 : 1
// })
// // console.log(listOfCharactersOrder);





