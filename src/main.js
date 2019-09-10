/* Manejo del DOM */
const listOfCharacters = RICKANDMORTY.results;
//Variable de filtros Estado
const alive = window.data.filterStatusAlive(listOfCharacters);
const dead = window.data.filterStatusDead(listOfCharacters);
const unknown = window.data.filterStatusUnknown(listOfCharacters);
//Variables de filtro de Genero
const female = window.data.filterGenderFemale(listOfCharacters);
const male = window.data.filterGenderFemale(listOfCharacters);
const genderUnknown = window.data.filterGenderUnknown(listOfCharacters);
//Variables de Orden
const orderABC = window.data.orderABC(listOfCharacters);
const orderCBA = window.data.orderCBA(listOfCharacters);

//Mostrar personajes
const buttonShowCharacters= document.getElementById('characters');
buttonShowCharacters.addEventListener('click', ()=>{
    document.getElementById('portals').style.display = 'none';
    document.getElementById('orderSelector').style.display = 'block';
    const showListOfCharacters=listOfCharacters
    const ele = document.getElementById('ulItem');
    ele.innerHTML =
    showListOfCharacters.map(x => {
        
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
})

const listShowCharacters= document.getElementById('showCharacters');
listShowCharacters.addEventListener('click', ()=>{
    document.getElementById('portals').style.display = 'none';
    const showListOfCharacters=listOfCharacters
    const ele = document.getElementById('ulItem');
    ele.innerHTML =
    showListOfCharacters.map(x => {
        
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
})

//Ordenar Datos
const selectOrderABC = document.querySelector('.orden');
selectOrderABC.addEventListener('change', () => {

    if( selectOrderABC.value === 'ABC'){

        const ele = document.getElementById('ulItem');
        ele.innerHTML =
        orderABC.map(x => {
            
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
    } else {

    
    const el = document.getElementById('ulItem');
    el.innerHTML =
        listOfCharactersOrderCBA.map(x => {

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
    }

});


// filtar datos

// filtro Estado (vivo)
const botonStatusAlive = document.getElementById('filterStatusAlive');
botonStatusAlive.addEventListener('click', () => {
    const el = document.getElementById('ulItem');
    el.innerHTML =
        alive.map(x => {

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
})


// filtro Estado (muerto)
const botonStatusDead = document.getElementById('filterStatusDead');
botonStatusDead.addEventListener('click', () => {
    const el = document.getElementById('ulItem');
    el.innerHTML =
        dead.map(x => {

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

})
// filtro Estado (indefinido)
const botonStatusUnknown = document.getElementById('filterStatusUnknown');
botonStatusUnknown.addEventListener('click', () => {

    console.log(unknown.length)
    const el = document.getElementById('ulItem');
    el.innerHTML =
        unknown.map(x => {

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

})
//Filtrar por Genero
//Femenino
const botonGenderFemale = document.getElementById('filterGenderFemale');
botonGenderFemale.addEventListener('click', () => {
    
    console.log(female.length);
    const el = document.getElementById('ulItem');
    el.innerHTML =
        female.map(x => {

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

})
// Masculino
const botonGenderMale = document.getElementById('filterGenderMale');
botonGenderMale.addEventListener('click', () => {
    
    console.log(male.length);
    const el = document.getElementById('ulItem');
    el.innerHTML =
        male.map(x => {

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

})

// Indefinido
const botonGenderUnknown = document.getElementById('filterGenderUnknown');
botonGenderUnknown.addEventListener('click', () => {
    
    
    const el = document.getElementById('ulItem');
    el.innerHTML =
        genderUnknown.map(x => {
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

})


//Calculos

//Conteo numerico por especies y con porcentaje
// const numberAlive = alive.length;
// const numberDead = dead.length;
// const numberUnknown = unknown.length;
// const totalStatus= parseInt(numberAlive+numberDead+numberUnknown);
// const porcentAlive = parseInt((numberAlive/totalStatus)*100);

// const porcentDead = parseInt((numberDead/totalStatus)*100);
// const porcentUnkown = parseInt((numberUnknown/totalStatus)*100);
