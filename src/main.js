/* Manejo del DOM */
const listOfCharacters = window.RICKANDMORTY.results;



//Mostrar personajes imagen portal
const buttonShowCharacters = document.getElementById('characters');
buttonShowCharacters.addEventListener('click', () => {
    document.getElementById('orderSelector').style.display = 'block';
    document.getElementById('portals').style.display = 'none';
    document.getElementById('list').style.display = 'block';

    const ele = document.getElementById('ulItem');
    ele.innerHTML =
        listOfCharacters.map(x => {
            return `
        <li class="liItem">
        <img class="imgRaM" src="${x.image}">
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
const listShowCharacters = document.getElementById('showCharacters');
listShowCharacters.addEventListener('click', () => {
    document.getElementById('portals').style.display = 'none';
    document.getElementById('container').style.display = 'block';
    document.getElementById('datos').style.display = 'none';
    document.getElementById('containerplace').style.display = 'none';
    document.getElementById('list').style.display = 'block';
    document.getElementById('orderSelector').style.display = 'none';
    const showListOfCharacters = listOfCharacters;
    const el = document.getElementById('ulItem');
    el.innerHTML =
        showListOfCharacters.map(x => {
            return `
        <li class="liItem">
        <img class="imgRaM" src="${x.image}">
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

    if (selectOrderABC.value === 'ABC') {

        const orderABC = window.data.orderABC(listOfCharacters);
        const el = document.getElementById('ulItem');
        el.innerHTML =
            orderABC.map(x => {

                return `
                <li class="liItem">
                <img class="imgRaM" src="${x.image}">
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
                            <img class="imgRaM" src="${x.image}">
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

const buttonStatus = document.getElementById('status');
buttonStatus.addEventListener('click', () => {
    document.getElementById('filterStatusAlive').style.display = "block";
    document.getElementById('filterStatusDead').style.display = "block";
    document.getElementById('filterStatusUnknown').style.display = "block";
    document.getElementById('gender').style.display = "none";
    buttonStatus.style.display = "none";
    const showListOfCharacters = listOfCharacters;
    const el = document.getElementById('ulItem');
    el.innerHTML =
        showListOfCharacters.map(x => {
            return `
        <li class="liItem">
        <img class="imgRaM" src="${x.image}">
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
    const alive = window.data.filterStatusAlive(listOfCharacters);
    const el = document.getElementById('ulItem');
    el.innerHTML =
        alive.map(x => {
            return `
                    <li class="liItem">
                        <img class="imgRaM" src="${x.image}">
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
    const dead = window.data.filterStatusDead(listOfCharacters);
    const el = document.getElementById('ulItem');
    el.innerHTML =
        dead.map(x => {

            return `
                    <li class="liItem">
                        <img class="imgRaM" src="${x.image}">
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
    const unknown = window.data.filterStatusUnknown(listOfCharacters);
    const el = document.getElementById('ulItem');
    el.innerHTML =
        unknown.map(x => {

            return `
                    <li class="liItem">
                        <img class="imgRaM" src="${x.image}">
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

const buttonGender = document.getElementById('gender');
buttonGender.addEventListener('click', () => {
    document.getElementById('filterGenderFemale').style.display = "block";
    document.getElementById('filterGenderMale').style.display = "block";
    document.getElementById('filterGenderUnknown').style.display = "block";
    document.getElementById('status').style.display = "none";
    buttonGender.style.display = "none";
    const showListOfCharacters = listOfCharacters;
    const ele = document.getElementById('ulItem');
    ele.innerHTML =
        showListOfCharacters.map(x => {
            return `
        <li class="liItem">
        <img class="imgRaM" src="${x.image}">
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
    const female = window.data.filterGenderFemale(listOfCharacters);
    const el = document.getElementById('ulItem');
    el.innerHTML =
        female.map(x => {

            return `
                    <li class="liItem">
                        <img class="imgRaM" src="${x.image}">
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
    const male = window.data.filterGenderMale(listOfCharacters);
    const el = document.getElementById('ulItem');
    el.innerHTML =
        male.map(x => {

            return `
                    <li class="liItem">
                        <img class="imgRaM" src="${x.image}">
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
    const genderUnknown = window.data.filterGenderUnknown(listOfCharacters);
    const el = document.getElementById('ulItem');
    el.innerHTML =
        genderUnknown.map(x => {
            return `
                    <li class="liItem">
                        <img class="imgRaM" src="${x.image}">
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


//Filtro lugares con select

const listShowLocation = document.getElementById('showLocation');
listShowLocation.addEventListener('click', () => {
    document.getElementById('portals').style.display = 'none';
    document.getElementById('containerplace').style.display = 'block';
    document.getElementById('datos').style.display = 'none';
    document.getElementById('container').style.display = 'none';
    document.getElementById('list').style.display = 'block';

    const ele = document.getElementById('ulItem');
    ele.innerHTML =
        listOfCharacters.map(x => {
            return `
        <li class="liItem">
        <img class="imgRaM" src="${x.image}">
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

// const buttonfilterPlaces = document.getElementById('filterPlace');
// buttonfilterPlaces.addEventListener('change', () => {

//  if( buttonfilterPlaces.value === 'earth'){

//const earth = window.data.filterPlace(listOfCharacters);
//const ele = document.getElementById('ulItem');
//ele.innerHTML =
//  earth.map(x => {
//    return `
//          <li class="liItem">
//            <img class="imgRaM" src="${x.image}">
//          <div class="charData">
//            Nombre: ${x.name}
//          Genero: ${x.gender}
//        Estado: ${x.status}
//      Origen: ${x.location.name}

//</div>
//</li>

//`;
//}).join('');



//Botón datos

const buttonDatos = document.getElementById("showCuriosities");
buttonDatos.addEventListener("click", () => {
    document.getElementById('portals').style.display = 'none';
    document.getElementById('container').style.display = 'none';
    document.getElementById('datos').style.display = 'block';
    document.getElementById('list').style.display = 'none';
    document.getElementById('containerplace').style.display = 'none';

    const numberFemale = window.data.curiositiesGenderFemale(listOfCharacters);
    const porcentFemale = ((numberFemale / listOfCharacters.length) * 100).toFixed(2);
    const numberMale = window.data.curiositiesGenderMale(listOfCharacters);
    const porcentMale = ((numberMale / listOfCharacters.length) * 100).toFixed(2);
    const numberUnknown = window.data.curiositiesGenderUnknown(listOfCharacters);
    const porcentUnknown = ((numberUnknown / listOfCharacters.length) * 100).toFixed(2);
    const numberAlive = window.data.curiositiesStatusAlive(listOfCharacters);
    const porcentAlive = ((numberAlive / listOfCharacters.length) * 100).toFixed(2);
    const numberDead = window.data.curiositiesStatusDead(listOfCharacters);
    const porcentDead = ((numberDead / listOfCharacters.length) * 100).toFixed(2);
    const numberStatusUnknown = window.data.curiositiesStatusUnknown(listOfCharacters);
    const porcentStatusUnknown = ((numberStatusUnknown / listOfCharacters.length) * 100).toFixed(2);
    const parrafo = document.getElementById('calculos');
    parrafo.innerHTML =

        ` <p>
       En la serie el ${porcentFemale} % está compuesto por <b>mujeres</b>, el  ${porcentMale} % corresponde a <b>hombres</b> y el  ${porcentUnknown}% tienen un <b>género desconocido</b>
   </p> <p>
       En la serie el ${porcentAlive} % está  <b>vivo</b>,  ${porcentDead} % está <b>muerto</b> y el  ${porcentStatusUnknown}% tiene un paradero <b>desconocido</b>
   </p>`
});



//Jerarquía de botones

//Estado
// const buttonsHierarchy = document.getElementById('status');
// buttonsHierarchy.addEventListener("click", () => {
//     document.getElementById("filterStatus").style.display = 'block';
//     document.getElementById("gender").style.display = 'block';
//     document.getElementById("filterGender").style.display = 'none';

// })

// //Genero

// const buttonsHierarchy1 = document.getElementById('gender');
// buttonsHierarchy1.addEventListener("click", () => {
//     document.getElementById("filterGender").style.display = 'block';
//     document.getElementById("status").style.display = 'block';
//     document.getElementById("filterStatus").style.display = 'none';
// })

const pushlogo = document.getElementById('logo');
pushlogo.addEventListener('click', () => {
    location.reload();
})


