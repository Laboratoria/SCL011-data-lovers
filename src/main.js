const ricks=RICKANDMORTY.result;


// declaro variable para male

const male = document.getElementById("male");

male.addEventListener("click", () => {
document.getElementById("male").style.display = "block"; 

console.log(male);

// recorrer data especial //

// for (let i=0; i<ricks.lenght; i++){
//     // escojo el espacio donde irá el texto
//     const container = document.createElement("section");
    
//     //declaro el espacio donde ira la data foto
//     const imgRicks=document.createElement("img");
//      imgRicks.src=(ricks[i].img);
//           const nameRicks = document.createElement("h2");
//      nameRicks.textContent=(ricks[i].name );
//      console.log(nameRicks);

//      container.appendChild(imgRicks);
//      container.appendChild(nameRicks);

    

}
)


// //declaro variables boton catálogo
// const opcioncatalogo= document.getElementById("btncatalogo");
// //declaro constante boton versus
// const opcionfiltro= document.getElementById("btnfiltro");

// //Evento opcioncatalogo que es el btncatalogo
// opcioncatalogo.addEventListener("click", ()=>{
//     //Muestro catálogo
//     document.getElementById("muestracatalogo").style.display = 'block';
//     //Oculto versus
//     document.getElementById("muestrafiltro").style.display = "none";
//     //Recorro data para luego imprimir en contenedorpokemon
//     for (let i=0; i<dataPokemon.length;i++){
//         //Declaro espacio que ocupará la impresión
//         const espaciocatalogo=document.createElement("section");
//         //declarar clase a la seccion para conectar con CSS
//         //espaciocatalogo.className="Nombrecito";
//         //declaramos id para ser utilizado en el futuro (¿?)
//         //espaciocatalogo.id="vercatalogo";
//         //declaramos espacio donde se imprimirá la data de num
//         const espacionum=document.createElement("h3");
//         //le asignamos el contenido al espacio, especificamente el valor del objeto
//         espacionum.textContent=(dataPokemon[i].num);

//         //declaramos espacio donde se imprimirá la data de name
//         const espaciononame=document.createElement("h4");
//         espaciononame.textContent=(dataPokemon[i].name);

//         //declaramos espacio donde imprimirá la data img
//         const espacioimg=document.createElement("img");
//         espacioimg.src=(dataPokemon[i].img);

//         //asignamos al padre espaciocatalogo el hijo correspondiente
//         espaciocatalogo.appendChild(espacioimg);
//         espaciocatalogo.appendChild(espacionum);
//         espaciocatalogo.appendChild(espaciononame);

//         //llevamos al padre/div raizcatalogo de HTML el hijo/section de JS
//         document.getElementById("raizcatalogo").appendChild(espaciocatalogo).innerHTML;
//     }
// });

// }}}}

