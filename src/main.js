const ricks = RICKANDMORTY;

const data = () => {
    

    //Creo una variable boton y con el querySelector accedo a el valor  
    button = document.querySelector('[type="button"]');
    nuevoItem = RICKANDMORTY.results[0].name;
    photo = RICKANDMORTY.results[0].image;
    genero = RICKANDMORTY.results[0].gender; 
    dataElement = document.getElementById("element");

    //Le asigno el evento y la funcion al boton 
    button.addEventListener("click", anadir);
};

function anadir(e) {
    // guardo el evento
    evento = e || window.event;
    //si es vacio no me hace nada (borre el imput)
    if (nuevoItem.value == "") {
        evento.preventDefault();
    } else {
        //Creo los elementos 
        let name = document.createElement("p");
        let photo = document.createElement("IMG");
        let gender = document.createElement("p");
        

        //Asigno el contenido de name
        name.innerHTML = nuevoItem;

        //Asigno el contenido de photo


        //Agrego al html
        dataElement.appendChild(name);
        photo.setAttribute("src", RICKANDMORTY.results[0].image);
        dataElement.appendChild(photo);
      dataElement.appendChild(gender);

        nuevoItem.value = "";
     }
 }

window.onload = data;
const ricks = window.RICKANDMORTY;

let photo = ricks.results[i].image;
let name = ricks.results[i].name;
let gender = ricks.results[i].gender;
let status = ricks.results[i].status;
let cards = document.createElement("div");
let buttonMale;
let cards = 

console.log(ricks);

document.getElementById("buttonMale").addEventListener("click", () =>{

}
)

// console.log(ricks);
for (let i=0; i<ricks.lenght; i++){
    document.getElementById("cipher").addEventListener("click", () => {
        texto= document.getElementById("texto").value.toUpperCase();
            document.getElementById("result").innerHTML = window.cipher.encode(texto, desplazamiento);
          
        });

let buttonMale = document.querySelector('[type="button"]');
let photo = ricks.results[i].image;
let textName = ricks.results[i].name;
let textGender = ricks.results[i].gender;

dataElement = document.getElementById("element");
buttonMale.addEventListener("click", anadirMale);
};

function anadirMale(e) {
    // guardo el evento
    evento = e || window.event;
    //si es vacio no me hace nada (borre el imput)
    if (textName.value == "") {
        evento.preventDefault();
    } else {
        //Creo los elementos 
        let photo = document.createElement("IMG");
        let name = document.createElement("p");
        let genderr = document.createElement("p");
        
    
        

//         //Asigno el contenido de name
//         name.innerHTML = textName;

//         //Asigno el contenido de photo


//         //Agrego al html
//         dataElement.appendChild(name);
//         dataElement.appendChild(genderr);
//         photo.setAttribute("src", ricks.results[0].image);
//         dataElement.appendChild(photo);
        
     

//         textName.value = "";
//      }
//  }



// window.onload = data;





  
//     photo = RICKANDMORTY.results[0].image;
//     
//     textGender = RICKANDMORTY.results[0].gender;
//     dataElement = document.getElementById("element");

//     //Le asigno el evento y la funcion al boton 
//     buttonMale.addEventListener("click", anadirMale);
// };

// function anadirMale(e) {
//     // guardo el evento
//     evento = e || window.event;
//     //si es vacio no me hace nada (borre el imput)
//     if (textName.value == "") {
//         evento.preventDefault();
//     } else {
//         //Creo los elementos 
//         let photo = document.createElement("IMG");
//         let name = document.createElement("p");
//         let genderr = document.createElement("p");
        
    
        

//         //Asigno el contenido de name
//         name.innerHTML = textName;

//         //Asigno el contenido de photo


//         //Agrego al html
//         dataElement.appendChild(name);
//         dataElement.appendChild(genderr);
//         photo.setAttribute("src", RICKANDMORTY.results[0].image);
//         dataElement.appendChild(photo);
        
     

//         textName.value = "";
//      }
//  }



// window.onload = data;


// true false para array filter = male true 
// for, for it
