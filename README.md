  

![enter image description here](https://bv-ssl-71522.nexcesscdn.net/pub/media/catalog/category/rickandmorty-banner-1.jpg)

  

[VER PAGINA](https://conyzarate.github.io/SCL011-data-lovers/src/index.html)

  

# Rick&Morty.Data

  

Rick y Morty es una serie creada por **Justin Roiland y Dan Harmon** para **Adult Swim**. Se caracteriza principalmente por su humor negro y conexión con la ciencia que deja a sus espectadores más que enamorados y con necesidad de querer ver más y más.

Dentro de las tres temporadas aparecen personajes que se conectan en tiempos y espacios diferentes lo que nos llevó a confeccionar esta web.

  
  

# Oportunidad detectada

  

El poder encontrar todos los personajes y recordarlos para recomendarlos se hace demasiado complejo, según la encuesta realizada más del **50%** de los espectadores les cuesta recordar el nombre de los personajes.

  

![enter image description here](https://i.ibb.co/nBgbz9R/teescomplejo.jpg)

  

Nos podemos dar cuenta que al **50%** le es complejo recordar los personajes a veces, cosa que hace que al ver otros capitulos no entiendan cual era el rol que cumplian. En un total tenemos una oportunidad de que un publico objetivo del **75%** pueda utilizar nuestra página web para la búsqueda de personajes.

  

## Público Objetivo.

  

Nuestro público objetivo se caracteriza por ser en su mayoría hombres entre 20 y 30 años con un gusto por la mentalidad cientifica y que constantemenete se están preguntando el porque de las cosas.

Las personas que se declaran admiradores de la serie tienen como principal respuesta a nuestro estudio que les gusta por su humor negro y la relación constante que tiene con temas que a veces son tan simples pero nosotros le encontramos una complejidad sin necesitarlo.

  

![enter image description here](https://i.ibb.co/qYMsLTP/preguntas-1.jpg)![enter image description here](https://i.ibb.co/RcrPnHm/preguntas2.jpg)

  

Dentro de estos dos bloques de respuesta nos podemos dar cuenta que el usuario lo que más destaca es lo extraña de la serie y como los hace reir.

  

## Solución al problema

Dentro del proyecto decidimos que la manera de poder ayudar a nuestro *público objetivo* es a través de una aplicación web donde podrán filtrar los personajes por género dentro de una pantalla principal y otra página donde puedan encontrar información adicional de la serie como una sección de vídeos y de noticias.

  

# Historias de Usuario

  

## #Historia1
🗣 Yo cómo fan de la serie quiero poder buscar los personajes dentro de la página de manera amigable y que pueda escogerlo según el genero del personaje para poder buscar los personajes que aveces olvido.

💡 Para esto creamos un landing page donde el usuario puede seleccionar a través de botones el género del personaje.

  

## #Historia2

🗣 Yo cómo usuario quiero encontrar dentro de la página información relevante sobre Rick&Morty, como videos y tips de secretos que se encuentran dentro de la página para poder saber cosas que no veo facilmente en la serie.

💡 Para esto creamos una sección dentro de la página llamada "Pildoras" su objetivo es poder encontrar información adicional sobre la serie.

  

## #Historia3

🗣 Yo cómo usuario espero poder leer información sobre los personajes que aparecen dentro de la serie para poder recordar en que capitulo aparecen y otros temas que no recuerde.

💡 Para esto creamos unas cartas donde aparecen la información del personaje adicional a su nombre.

  <h3>Respaldo de información. 
  
  

![enter image description here](https://i.ibb.co/4pNHjMV/sobrelaweb.jpg)

  

Quisimos subir una pregunta más amplia para así poder entender realmente que es lo que está buscando el usuario, aunque su amplitud fue mucha y nos encontramos con respuestas que de verdad no podríamos solucionar nos sirvió para poder darnos historias de usuario relevante y que si funcionarían dentro del producto.

  

# Diseño de interfaz de usuario

  

## Diseño de baja fidelidad 

  

![enter image description here](https://i.ibb.co/4N5dXpg/Rick-And-Morty-Low.jpg)

  

Para poder llegar a este prototipo de baja fidelidad tuvimos que antes entender los cuestionarios que hicimos y con anterioridad a esto hicimos un flujo de caja donde podíamos saber para que nos iba a funcionar cada sección principal del inicio.![enter image description here](https://i.ibb.co/bzz8XMx/Flujo-caja.jpg)

  

# Diseño de alta fidelidad N°1

El prototipo de alta fidelidad lo realizamos en [FIGMA](https://www.figma.com/proto/G22hspxxOK9fE89ZIo0Stp/Untitled?node-id=3:0&scaling=contain&hotspot-hints=0), si haces click en el texto azul podrás ver como funciona nuestro proyecto.

  

![enter image description here](https://i.ibb.co/60LHcyk/figma.jpg)

 
## Decisiones de Diseño

  

*  **Paleta de colores**

![paletadecolores](https://i.ibb.co/HK9R0Tg/paletadecolores.jpg)

> Esta paleta de colores salió de la abstracción de una de las fotos más emblematicas de Rick & Morty y sentimos que representa 100% lo que queremos dar a conocer sobre la serie.

*  **Paleta de colores propuesta final**
![enter image description here](https://i.ibb.co/v1KPcVj/paleta-de-colores.jpg)

> Esta paleta de colores fue elegida finalmente después de que la primera maqueta no funcionara como esperabamos, los usuarios buscan que la página tenga la menor información posible y muchos colores hace que esto no funcione, nos focalizamos en estos colores para poder utilizar más imagenes representativas que fondos completos.


*  **Posiciones de botones y distribución web**

> La página web tendrá lo más simple en cuanto a los botones y distribución web para que así el usuario pueda solo buscar lo que necesita y no se sobrealimente con información innecesaria.

  

## Developer Edition

Entendemos lo importante que es el poder explicar sobre nuestro código para que así otras personas puedan experimentar al igual que nosotras.

  

Es por eso que les enseñaremos un poco sobre lo que quisimos hacer y como lo realizamos.

  

> Filtrado para género

  

if (type === "male") {

dataSelected = characMale.slice();

Para poder seleccionar solo una selección al data utilizamos "if" y que se igualará a solo un tipo de género dentro del código

  

> Ordenando la Data

  

ricks.sort((nameone, nametwo) =>  nameone.name.localeCompare(nametwo.name));

Utilizamos Sort con base A y base B para poder ordenar de la A a la Z nuestra data, solo cambiamos la A por NameOne y la B por NameTwo
  

> Estadisticas de información

apparitionPercent: (episodes) => {

let percentajeTotal = Math.round((episodes * 100) / 31);

Utilizamos la regla de tres como ejercicio matemático básico para poder tener la cantidad de episodios que aparece cada personaje

# Checklist 

👌 Usa VanillaJS.
👌 No hace uso de this.
👌 Pasa linter (npm pretest)
👌 Pasa tests (npm test)
👌 Pruebas unitarias cubren un mínimo del 70% de statements, functions y lines y branches.
👌 Incluye Definición del producto clara e informativa en README.md.
👌 Incluye historias de usuario en README.md.
👌 Incluye sketch de la solución (prototipo de baja fidelidad) en README.md.
👌 Incluye Diseño de la Interfaz de Usuario (prototipo de alta fidelidad) en README.md.
👌 Incluye link a Zeplin/Figma en README.md.
👌 Incluye el listado de problemas que detectaste a través de tests de usabilidad en el README.md.
👌 UI: Muestra lista y/o tabla con datos y/o indicadores.
👌 UI: Permite ordenar data por uno o más campos (asc y desc).
👌 UI: Permite filtrar data en base a una condición.

## Planificando

  

  

Dentro de nuestro Trello se puede ver el avance que tuvimos con el proyecto, hay algunos puntos que no se alcanzaron a finalizar por tema de tiempos pero siempre estamos dispuestas a finalizarlo.

[LINK TRELLO GRUPAL](https://trello.com/b/dWlsbAB7/rick-and-morty-app)

# Prototipo final

Nuestra web finalmente debido a las pruebas con usuario paso de tener mucha información visual a tener muy poca debido a que les molestaba el tener botones con fondos transparentes y no entender bien para que se utilizaban.

![Index](https://i.ibb.co/jbQppG4/protipfinal.jpg)

![Pildoras](https://i.ibb.co/3r2T0f1/pildoras.jpg)