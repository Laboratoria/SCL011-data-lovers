/* Manejo del DOM */
let listOfCharacters = RICKANDMORTY.results;

//sacar y mostarar datos
const botoncitoABC = document.getElementById('ABC');
botoncitoABC.addEventListener('click', () => {
    const listOfCharactersOrderABC = listOfCharacters.sort((a, b) => {
        return (a.name < b.name) ? -1 : 1
      })

    
    const el = document.getElementById('ulItem');
    el.innerHTML =
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

});

const botoncitoCBA = document.getElementById('CBA');
botoncitoCBA.addEventListener('click', () => {
    const listOfCharactersOrderCBA = listOfCharacters.sort((a, b) => {
        return (b.name < a.name)? -1 : 1
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
                        Capítulo de aparición: ${x.episode}
                    </div>    
                </li>
            `;
        }).join('');
})



// filtar datos

// filtro Estado (vivo)
const botonStatusAlive= document.getElementById('filterStatusAlive');
botonStatusAlive.addEventListener('click', ()=>{
    const alive = listOfCharacters.filter( (e) => {
        return (e.status === 'Alive');
    
      })
      console.log(alive.length);  
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
const botonStatusDead= document.getElementById('filterStatusDead');
botonStatusDead.addEventListener('click', ()=>{
    const dead = listOfCharacters.filter( (e) => {
        return (e.status === 'Dead');
    
      })
      console.log(dead.length);
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
const botonStatusUnknown= document.getElementById('filterStatusUnknown');
botonStatusUnknown.addEventListener('click', ()=>{
    const unknown = listOfCharacters.filter( (e) => {
        return (e.status === 'unknown');
    
      })
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
const botonGenderFemale= document.getElementById('filterGenderFemale');
botonGenderFemale.addEventListener('click', ()=>{
    const female = listOfCharacters.filter( (e) => {
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
const botonGenderMale= document.getElementById('filterGenderMale');
botonGenderMale.addEventListener('click', ()=>{
    const male = listOfCharacters.filter( (e) => {
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
const botonGenderUnknown= document.getElementById('filterGenderUnknown');
botonGenderUnknown.addEventListener('click', ()=>{
    const unknown = listOfCharacters.filter( (e) => {
        return (e.gender === 'unknown');
    
      })
     console.log(unknown.lenght);
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

