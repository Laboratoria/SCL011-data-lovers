/* Manejo del DOM */
let listOfCharacters = RICKANDMORTY.results;
//Variable de filtros Estado
const alive = listOfCharacters.filter((e) => {
    return (e.status === 'Alive');

});

const dead = listOfCharacters.filter((e) => {
    return (e.status === 'Dead');

});

const unknown = listOfCharacters.filter((e) => {
    return (e.status === 'unknown');

});

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

//Ordenar Datos
const selectOrderABC = document.querySelector('.orden');
selectOrderABC.addEventListener('change', () => {

    if( selectOrderABC.value === 'ABC'){

        const listOfCharactersOrderABC = listOfCharacters.sort((a, b) => {
            return (a.name < b.name) ? -1 : 1
        })
        
        
        const ele = document.getElementById('ulItem');
        ele.innerHTML =
        listOfCharactersOrderABC.map(x => {
            
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

    const listOfCharactersOrderCBA = listOfCharacters.sort((a,b) => {
        return (b.name < a.name) ? -1 : 1
    })
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
    const female = listOfCharacters.filter((e) => {
        return (e.gender === 'Female');

    })
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
    const male = listOfCharacters.filter((e) => {
        return (e.gender === 'Male');

    })
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
    const unknown = listOfCharacters.filter((e) => {
        return (e.gender === 'unknown');

    })
    console.log(totalEstados);
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


//Calculos

//Conteo numerico por especies y con porcentaje
const numberAlive = alive.length;
const numberDead = dead.length;
const numberUnknown = unknown.length;
const totalStatus= parseInt(numberAlive+numberDead+numberUnknown);
const porcentAlive = parseInt((numberAlive/totalStatus)*100);

const porcentDead = parseInt((numberDead/totalStatus)*100);
const porcentUnkown = parseInt((numberUnknown/totalStatus)*100);
