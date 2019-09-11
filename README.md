
# Rick&Morty.Data

Rick y Morty es una serie creada por **Justin Roiland y Dan Harmon** para **Adult Swim**.  Se caracteriza principalmente por su humor negro y conexión con la ciencia que deja a sus espectadores más que enamorados y con necesidad de querer ver más y más.
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
Dentro del proyecto decidimos que la manera de poder ayudar a nuestro *público objetivo* es a través de una aplicación web donde podrán filtrar los personajes por género dentro de una pantalla principal y otra página  donde puedan encontrar información adicional de la serie como una sección de vídeos y de noticias.

# Historias de Usuario 

## #Historia1

   

>Yo cómo usuario quiero poder buscar los personajes dentro de la página de manera amigable y que pueda escogerlo según el genero del personaje.

## #Historia2
> Yo cómo usuario quiero encontrar dentro de la página información relevante sobre Rick&Morty, como videos y tips de secretos que se encuentran dentro de la página.

## #Historia3
> Yo cómo usuario espero poder leer información sobre los personajes que aparecen dentro de la serie.



![enter image description here](https://i.ibb.co/4pNHjMV/sobrelaweb.jpg)

Quisimos subir una pregunta más amplia para así poder entender realmente que es lo que está buscando el usuario, aunque su amplitud fue mucha y nos encontramos con respuestas que de verdad no podríamos solucionar nos sirvió para poder darnos historias de usuario relevante y que si funcionarían dentro del producto.

# Diseño de interfaz de usuario

## Diseño de baja fidelidad

![enter image description here](https://i.ibb.co/4N5dXpg/Rick-And-Morty-Low.jpg)

Para poder llegar a este prototipo de baja fidelidad tuvimos que antes entender los cuestionarios que hicimos  y con anterioridad a esto hicimos un flujo de caja donde podíamos saber para que nos iba a funcionar cada sección principal del inicio.![enter image description here](https://i.ibb.co/bzz8XMx/Flujo-caja.jpg)

# Diseño de  alta fidelidad
El prototipo de alta fidelidad lo realizamos en [FIGMA](https://www.figma.com/proto/G22hspxxOK9fE89ZIo0Stp/Untitled?node-id=3:0&scaling=contain&hotspot-hints=0), si haces click en el texto azul podrás ver como funciona nuestro proyecto.

![enter image description here](https://i.ibb.co/60LHcyk/figma.jpg)

## Decisiones de Diseño

* **Paleta de colores**
> ![paletadecolores](https://i.ibb.co/HK9R0Tg/paletadecolores.jpg)
> Esta paleta de colores salió de la abstracción de una de las fotos más emblematicas de Rick & Morty y sentimos que representa 100% lo que queremos dar a conocer sobre la serie.
* **Posiciones de botones y distribución web**
> La página web tendrá lo más simple en cuanto a los botones y distribución web para que así el usuario pueda solo buscar lo que necesita y no se sobrealimente con información innecesaria.

## Developer Edition
Entendemos lo importante que es el poder explicar sobre nuestro código para que así otras personas puedan experimentar al igual que nosotras. 

Es por eso que les enseñaremos un poco sobre lo que quisimos hacer y como lo realizamos.

> Filtrado para género

    if (type  ===  "male") {
    
    dataSelected  =  characMale.slice();
    
  Para poder seleccionar solo una selección al data utilizamos "if" y que se igualará a solo un tipo de género dentro del código

> Ordenando la Data


> Estadisticas de información

