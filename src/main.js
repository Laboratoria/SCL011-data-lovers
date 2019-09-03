/* Manejo del DOM */
let newElement = document.createElement("h2");
//crear contenido del mensaje
let insertText = document.createTextNode("Bienvenido a Master Pokemon Go");
//llamar let e insertar el mensaje
newElement.appendChild(insertText);
//agregar ubicacion en html
document.getElementById("home").appendChild(newElement);