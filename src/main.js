/* Manejo del DOM */
const listOfCharacters = RICKANDMORTY.results;


//Mostrar personajes imagen portal
const buttonShowCharacters= document.getElementById('characters');
buttonShowCharacters.addEventListener('click', () => {
    document.getElementById('portals').style.display = 'none';
    document.getElementById('orderSelector').style.display = 'block';
    const ele = document.getElementById('ulItem');
    ele.innerHTML =
    listOfCharacters.map(x => {
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

//boton Personajes
const listShowCharacters= document.getElementById('showCharacters');
listShowCharacters.addEventListener('click', ()=>{
    document.getElementById('portals').style.display = 'none';
    const showListOfCharacters=listOfCharacters;
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
const selectOrderABC = document.getElementById('orderSelector');
selectOrderABC.addEventListener('change', () => {

    if( selectOrderABC.value === 'ABC'){

        const orderABC = window.data.orderABC(listOfCharacters);
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
    const orderCBA = window.data.orderCBA(listOfCharacters);
    const el = document.getElementById('ulItem');
    el.innerHTML =
        orderCBA.map(x => {

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
//boton genero


// filtar datos

const buttonStatus= document.getElementById('status');
buttonStatus.addEventListener('click', () => {
    document.getElementById('filterStatusAlive').style.display= "block";
    document.getElementById('filterStatusDead').style.display= "block";
    document.getElementById('filterStatusUnknown').style.display= "block";
    document.getElementById('gender').style.display= "none";
    buttonStatus.style.display= "none";
    const showListOfCharacters=listOfCharacters;
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
// filtro Estado (vivo)
const botonStatusAlive = document.getElementById('filterStatusAlive');
botonStatusAlive.addEventListener('click', () => {
    // asignando a alive el resultado de la fnc filterStatusAlive
    const alive = data.filterStatusAlive(listOfCharacters); 
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
    const dead = data.filterStatusDead(listOfCharacters);
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
    const unknown = data.filterStatusUnknown(listOfCharacters);
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

const buttonGender= document.getElementById('gender');
buttonGender.addEventListener('click', () => {
    document.getElementById('filterGenderFemale').style.display= "block";
    document.getElementById('filterGenderMale').style.display= "block";
    document.getElementById('filterGenderUnknown').style.display= "block";
    document.getElementById('status').style.display= "none";
    buttonGender.style.display= "none";
    const showListOfCharacters=listOfCharacters;
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
//Femenino
const botonGenderFemale = document.getElementById('filterGenderFemale');
botonGenderFemale.addEventListener('click', () => {
    const female = data.filterGenderFemale(listOfCharacters);
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
    const male = data.filterGenderMale(listOfCharacters);
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
    const genderUnknown = data.filterGenderUnknown(listOfCharacters);
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
