# **Data Lovers**

## **Índice**

* [Contexto](#contexto)
* [Descripción](#resumen-del-proyecto)
* [Consideraciones generales](#consideraciones-generales)
* [Objetivos de aprendizaje](#objetivos-de-aprendizaje)
* [Parte obligatoria](#parte-obligatoria)
* [Parte opcional](#parte-opcional-hacker-edition)
* [Consideraciones técnicas](#consideraciones-técnicas)
* [Primeros pasos](#primeros-pasos)
* [Contenido de referencia](#contenido-de-referencia)
* [Checklist](#checklist)

***

## **1. Contexto**

**Steam** es una plataforma de distribución digital de videojuegos desarrollada por Valve Corporation. Fue lanzada en Septiembre del 2003 como una forma para Valve de proveer actualizaciones automáticas a sus juegos, pero eventualmente se expandió para incluir juegos que no son de Valve de distribuidores third-party. Steam ofrece gestión digital de derechos, servidores de emparejamiento, transmisiones de vídeo y servicios de redes sociales. También provee al usuario con la instalación y actualización automática de juegos y características de comunidad tales como grupos y listas de amigos, guardado en la nube, voz en el juego y funcionalidad de chat. (Fuente: [Wikipedia](https://es.wikipedia.org/wiki/Steam))

**Team Fortress 2 *(TF2)*** es un videojuego multijugador de disparos en primera persona desarrollado y publicado por Valve Corporation. (Fuente: [Wikipedia](https://es.wikipedia.org/wiki/Team_Fortress_2))

Descripción en Steam:
```
Nueve clases diferentes ofrecen una amplia variedad de habilidades tácticas y personalidades. Constantemente actualizado con nuevos modos de juego, mapas, equipamiento y, lo que es más importante, ¡sombreros!
```
Según estadísticas de Steam, en la actualidad existen más de 43.000 jugadores de TF2 y se encuentra en el lugar número 11 de clasificación por número de jugadores.

![json-interfaz](https://lh4.googleusercontent.com/Tn-RPXS26pVvOTdUzRT1KVaJ-_QbFs9SpcGLxSPE43fgbHaXtFgMUInuDt7kV41DkT1j8Tt29V0LxQW7SMtC6digOIhfTXSBKdwI08wUwhD3RAqlwy0hjfmhZ2BFe91mtmCSEqysfgk)

\* Puedes ver el datalle de la data en este [link](https://gist.github.com/lalogf/dd4aa3017a9f8aa8f90dfbca382c4dc9#file-student-json)
y la interfaz construida en este [link](https://app.talento.laboratoria.la/profile/HFOoMpOreBU2psCcjjLg5O2EWEv2).


## **Usuario Objetivo**
Al ser _Steam_ una plataforma de video juegos, la cantidad de usuarios que la utilizan y leerian sus noticias, son enormes, pero, la _data_ disponible a trabajar contiene noticias de un mismo video Juego; _Team Fortress 2_. Debido a lo anterior, fuimos capaces de definir rapidamente un usuario Objetivo.
Nuestros Usuarios son:
Personas que juegen o hayan jugado el video juego _"Team Fortress 2"_ en su versión para computador, con una rango etario entre los 20 y 30 años.

## Primeras Entrevistas:
En una primera instancia, decidimos hacer una pequeña entrevista, para definir los intereses de nuestros usuarios con respecto al proyecto.
*_Algunas Preguntas fueron modificadas según lo que respondía el usuario_*
* 1er usuario; Hombre, 23 años.
    ¿cómo llegaste a jugar 'TF2'?
    - Me lo Recomendó un amigo hace años, en el colegio.
    ¿Por qué lo dejaste de Jugar?
    - Porque perdía mucho y me frustraba, Aparte se me hechó a perder el PC en ese tiempo, así que tampoco lo podía jugar.
    ¿Usabas la Plataforma _Steam_ con regularidad?
    - sí, desde que comencé a jugar.
    ¿Y leias las noticias sobre el juego?
    - No, porque no sabía que había noticias sobre ese juego. Pero, me informo arto sobre otros juegos de rockstar games, cómo el GTA...
    Si entras a una pagina que informa sobre un juego, ¿que te gustaría leer?
    - Bueno, a mí al menos, lo que más me gusta es saber sobre el contenido que se irá añadiendo, o que podrá mejorar el juego con alguna actuaización.
* 2do Usuario; mujer 26 años.
    ¿cómo llegaste a jugar 'TF2'?
    - Una amiga lo jugaba
    ¿Que te llama la atención del juego?
    - era gratis.
    ¿Usas Steam con regularidad?
    - No, antes sí.
    ¿haz leído noticias de Video Juegos?
    - Sí.
    ¿Que peinsas de ellas?
    - Innecesarias
    Si entras a una pagina que informa sobre un juego, ¿que te gustaría leer?
    - Noticias sobre eventos, porque me gusta participar de ellos.
* 3er Usuario: mujer, 20 años.
    ¿Hace cuanto juegas 'TF2'?
    - A pesar de todos los años que tiene, nunca me enteré de que existía el juego, así que empece a jugarlo como hace un año.
    ¿Cómo llegaste a jugar 'TF2'?
    - Una amiga me lo recomendó, porque dijo que se parecia al Overwatch pero gratis.
    ¿que te llama la atención del juego?
    - El diseño de los personajes, es lo que más me gusta. Los mapas igual son buenos, pero cada personaje es único.
    ¿Usas la Plataforma de Steam de forma habitual?
    - Sí la uso habitualmente.
    ¿Lees noticias sobre el TF2?
    - Sí me gusta mantenerme al tanto de lo que pasa en el juego. O también las actualizaciones, aunque sean pocas.
* 4to Usuario: Hombre, 28 años
    ¿Cuanto tiempo jugaste TF2?
    - como 100 - 120 horas.
    ¿como llegaste a jugar TF2?
    - Era _Gamer_ pobre. Busqué en Steam 'Free To Play' y me salió el TF2
    ¿Que es lo que te llama más la atención del juego?
    - Lo enfermo que era, es muy bizarro y son muy chistoso los match.
    ¿Usas la plataforma de Steam de forma habitual?
    - Sí, con mi cuenta actual. Me conecto todos los días para actualizar lod juegos o ver alguna oferta.
    ¿Lees noticias sobre el TF2 en Steam?
    - Sí, leí la ultima, sobre el aniversario 12 del juego y que aún se seguía actualizando.
    ¿Cúales son las que más te interesan?
    - Las de actualización. Yo que estoy estudiando algo ligado al medio te puedo decir queme sorprende un juego que tenga mas de 10 años y no lo dejen tirado. Es el compromiso de _valve_ como desarrollador...
* 5to usuario: Hombre, 30 años.
    ¿Hace cuanto juegas el TF2?
    - 10 años
    ¿Cómo llegaste a jugar el TF2?
    - A travez de Steam. Buscabamos juegos colaborativos y en equipo, no tan realistas, tipo animación, así lo encontramos.
    ¿qué es lo que más te llama la atención?
    - Las modalidades de juegos , por ejemplo: casual, competitivo, capturar a bandera, carga explosiva y otros más. Te da la oportunidad de jugar contra otros players o cómo con la maquina; Mann vs Machine. Lo mejor es que los micropagos que tiene no son para ganar nivel o tener mayor skill, es simplemente Skins.
    ¿usas la plataforma de steam de forma habitual?
    - sí, se inicia con el pc.
    ¿Lees noticias sobre el TF2?
    - solo las que aparecen en el inicio o si sale algun modo nuevo. Cosas como mantenimiento o mejoras en actualizaciones no, esas me las pillo en el juego solamente.
-------------------------------

## **2. Resumen del proyecto**

En este proyecto **construirás una _página web_ para visualizar un
_conjunto (set) de datos_** que se adecúe a lo que descubras que tu usuario
necesita.

Esta vez te proponemos una serie de datos de diferentes _temáticas_ para que
explores y decidas con qué temática te interesa trabajar. Hemos elegido
específicamente estos sets de datos porque creemos que se adecúan bien a esta
etapa de tu aprendizaje.

Una vez que definas tu área de interés, entiende quién es tu usuario y qué
necesita saber o ver exactamente; luego podrás construir la interfaz que le
ayude a interactuar y entender mejor esos datos.

Estos son datos que te proponemos:

* [Banco Mundial](src/data/worldbank/worldbank.json) Indicadores de desarrollo del Banco Mundial de algunos países (Brasil, Chile, 
  México y Perú). Estos datos incluyen indicadores demográficos, económicos y 
  comerciales.
* [Pokémon](src/data/pokemon/pokemon.json):
  En este set encontrarás una lista con los 151 Pokémon de la región de Kanto,
  junto con sus respectivas estadísticas usadas en el juego [Pokémon GO](https://pokemongolive.com).
* [Steam noticias](src/data/steam/steam.json):
  Lista noticias relacionadas a los videojuegos presentes en la
  plataforma de [Steam](https://store.steampowered.com/).
* [League of Legends - Challenger leaderboard](src/data/lol/lol.json):
  Este set de datos muestra la lista de jugadores en una liga del
  juego League of Legends (LoL), puedes revisar la documentación de su API en
  este [link](https://developer.riotgames.com/api-methods/).
* [Personas heridas por medio de transporte en EEUU](src/data/injuries/injuries.json).
  Este set nos muestra el número de personas heridas en accidentes de
  transporte, con data anual desde 1960 y categorizada por tipo de transporte
  (aire, barco, automóvil, moto, bicileta, ...).
* [Rick and Morty](src/data/rickandmorty/rickandmorty.json): Este set nos proporciona la lista de los personajes de la serie Rick and Morty. Puedes revisar la documentación de su API en este [link](https://rickandmortyapi.com/)
* [Pacientes en EEUU](src/data/patient/patient.json): Este set nos proporciona una lista de pacientes de EEUU. Puedes revisar la documentación de su API en este [link](https://r2.smarthealthit.org/Patient)

Como entregable final tendrás una página web que permita **visualizar la data,
filtrarla, ordenarla y hacer algún calculo agregado**. Como aclaración,
con cálculo agregado nos referimos a distintos cálculos que puedes hacer con
la data que tienes para mostrar información aún más relevante a los usuarios.
Una opción serían cálculos estadísticos como el promedio, el máximo o el mínimo,
por ejemplo, si tenemos una colección que representa a un grupo de personas,
y cada persona está representada como un _objeto_ con una _propiedad_ `altura`,
podríamos elegir calcular la altura promedio en el grupo entre otras cosas.

## **3. Objetivos de aprendizaje**

El objetivo principal de este proyecto es que aprendas a diseñar y construir una
interfaz web donde se pueda visualizar y manipular data, entendiendo lo que el
usuario necesita.

Dicho en palabras sencillas, aprenderás a:

* Aplicar y profundizar todo lo que aprendiste en el proyecto anterior.
* Pensar en las **necesidades de los usuarios** para crear historias de usuario.
* Escribir y trabajar con **historias de usuario**, sus definiciones de
  terminado (_definition of done_) en la organización y planificación de tu
  trabajo.
* Definir qué data y de qué forma mostrarla en el producto, basándote en
  tu **entendimiento del usuario**.
* Crear productos que sigan los **principios básicos de diseño visual** y
  las **heurísticas de usabilidad**.
* Iterar el diseño del producto, basándote en los resultados de los
  **tests de usabilidad**.
* Manipular **_arreglos_ (_arrays_) y _objetos_ (_objects_)**.
* **Manipular el DOM** (agregar elementos dinámicamente basados en la data).
* **Manejar eventos del DOM** para permitir interacción con el usuario
  (filtrado, ordenado, ...).
* Entender los beneficios y complejidades de **trabajar en equipo** en un
  ambiente de incertidumbre.

## **4. Consideraciones generales**

* Este proyecto se debe resolver en duplas.
* El proyecto será entregado subiendo tu código a GitHub (commit/push) y la
  interfaz será desplegada usando [GitHub Pages](https://pages.github.com/).
* Tiempo para completarlo: El proyecto dura 2.5
 semanas, trabaja con sprints 
y planificando tus tareas.
* La división y organización del trabajo debe permitir, sin excepciones, que **cada integrante** del equipo practique el aprendizaje de todo lo involucrado en **cada historia**. No se dividan el trabajo como en una fábrica.
* Antes de comenzar, conversen sobre cómo le fue a cada una en el proyecto anterior para que puedan entender mejor cómo organizarse. No caigan en el error de cada una hacer lo que ya sabe bien cómo hacer. Aprovechen la oportunidad de hacer lo que no saben bien. Acá estás para aprender, no para "entregar" proyectos solamente.
* Una vez que hayan definido y priorizado sus Historias de Usuario, solamente podrán trabajar en una por vez, no pueden avanzar a la siguiente sin haber completado la anterior. La historia se completa cuando se cumplen **todos** sus Criterios de Aceptación + **toda** su Definición de Terminado.

## **5. Criterios de Aceptación Mínimos del Proyecto**

Los criterios para considerar que has completado este proyecto son:

### **5.1 Definición del producto**

Documenta brevemente tu trabajo en el archivo `README.md` de tu repositorio,
contándonos cómo fue tu proceso de diseño y cómo crees que el producto resuelve
el problema (o problemas) que tiene tu usuario.

### **5.2 Historias de usuario**

En base a nuestras entrevistas y primer testeo de usuario, hicimos 3 historias de usuario que irían en función de responder los requerimientos del usuario.

#### **Historia 1**
```
Yo como persona apasionada a los videojuegos quiero acceder de una manera más sencilla a la información dependiendo de mis intereses en el juego.
```
Esta historia responde a la necesidad de filtros


#### **Historia 2**
```
Yo como persona apasionada a los videojuegos quiero saber cada cuánto hay actualizaciones y mejoras del TF2 para poder darme cuenta si el juego aún está vigente.
```
Esta historia responde a Cálculo

#### **Historia 3**
```
Yo como persona preocupada de los videojuegos quiero ver primero si hay eventos o actualizaciones nuevas para poder participar activamente tanto del juego como de la comunidad.
```
Esta es para orden


### **5.3 Diseño de la Interfaz de Usuario**

#### Prototipo de baja fidelidad

Durante tu trabajo deberás haber hecho e iterado sketches (boceto) de tu
solución usando papel y lápiz. Te recomendamos tomar fotos de todas las
iteraciones que realices, y las subas a tu repositorio, y las menciones en tu
`README.md`.

#### Prototipo de alta fidelidad

Lo siguiente es diseñar tu Interfaz de Usuario (UI por sus siglas en inglés -
_User Interface_). Para eso debes aprender a utilizar alguna herramienta de
diseño visual. Nosotros te recomendamos [Figma](https://www.figma.com/) que es
una herramienta que funciona en el navegador y, además, puedes crear una cuenta
gratis. Sin embargo, eres libre de utilizar otros editores gráficos como
Illustrator, Photoshop, PowerPoint, Keynote, etc. Recuerda utilizar la identidad
gráfica correspondiente a cada set de datos que elijas.

El diseño debe representar el _ideal_ de tu solución. Digamos que es lo que
desearías implementar si tuvieras tiempo ilimitado para hackear. Además, tu
diseño debe seguir los fundamentos de _visual design_. También, deberás exportar
tu diseño a [Zeplin](https://zeplin.io/) y utilizar las especificaciones de
estilo que te dé Zeplin al momento de implementar tus diseños en código.

#### Testeos de usabilidad

Durante el reto deberás realizar tests de usabilidad con distintos usuarios, y
en base a los resultados de esos tests, deberás iterar tus diseños. Cuéntanos
qué problemas de usabilidad detectaste a través de los tests y cómo los
mejoraste en tu propuesta final.

### **5.4 Implementación de la Interfaz de Usuario (HTML/CSS/JS)**

Luego de diseñar tu interfaz de usuario deberás trabajar en su implementación.
Como mencionamos, **no** es necesario que construyas la interfaz tal como la
diseñaste. Tendrás un tiempo limitado para hackear, así es que deberás
priorizar.

Como mínimo, tu implementación debe:

1. Mostrar la data en una interfaz: puede ser un card, una tabla, una lista, etc.
2. Permitir al usuario filtrar y ordenar la data.
3. Calcular estadísticas de la colección (o subcolección) como media aritmética,
   máximo y/o mínimo de algún atributo numérico, o contar cuántas veces aparece
   un determinado valor, por ejemplo.
4. Visualizarse sin problemas desde distintos tamaños de pantallas: móviles,
   tablets y desktops.

Es importante que tu interfaz, a pesar de ser una versión mínima de tu ideal,
siga los fundamentos de _visual design_.

### **5.5 Pruebas unitarias**

El _boilerplate_ de este proyecto no incluye pruebas unitarias, pero esperamos
que escribas tu propias pruebas unitarias para las funciones encargadas de
_procesar_, _filtrar_ y _ordenar_ la data, así como _calcular_ estadísticas.
Para ello te recomendamos implementar las siguientes funciones en el archivo
`src/data.js`:

* `filterData(data, condition)`: esta función `filter` o filtrar recibiría la
  data, y nos retornaría aquellos datos que sí cumplan con la condición.

* `sortData(data, sortBy, sortOrder)`: esta función `sort` u ordenar
  recibe tres parámetros.
  El primer parámetro, `data`, nos entrega los datos.
  El segundo parámetro, `sortBy`, nos dice con respecto a cuál de los campos de
  la data se quiere ordenar.
  El tercer parámetro, `sortOrder`, indica si se quiere ordenar de manera
  ascendente o descendente.

* `computeStats(data)`: la función `compute` o calcular, nos permitirá hacer
  cálculos estadísticos básicos para ser mostrados de acuerdo a la data
  proporcionada.

Estas son ideas de funciones que podrías implementar, pero esto depende de tu
propia implementación.

El archivo `src/data.js` tiene que tener una cobertura del 70% de _statements_
(_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
(_ramas_).

Estas funciones deben ser [_puras_](https://medium.com/laboratoria-developers/introducci%C3%B3n-a-la-programaci%C3%B3n-funcional-en-javascript-parte-2-funciones-puras-b99e08c2895d)
e independientes del DOM. Estas funciones serán después usadas desde el archivo
`src/main.js`, al cargar la página, y cada vez que el usuario interactúe (click,
filtrado, ordenado, ...).

## **6. Parte Opcional (Hacker edition)**

Features/características extra sugeridas:

* En lugar de consumir la data estática brindada en este repositorio, puedes
  consumir la data de forma dinámica, cargando un archivo JSON por medio de
  `fetch`. La carpeta `src/data` contiene una versión `.js` y una `.json` de
  de cada set datos.
* Agregarle a tu interfaz de usuario implementada visualizaciones gráficas. Para
  ello te recomendamos explorar librerías de gráficas como [Chart.js](https://www.chartjs.org/)
  o [Google Charts](https://developers.google.com/chart/).
* 100% Coverage

## **7. Consideraciones técnicas**

La lógica del proyecto debe estar implementada completamente en JavaScript
(ES6), HTML y CSS. En este proyecto NO está permitido usar librerías o
frameworks, solo [vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e),
con la excepción de librerías para hacer gráficas (charts); ver
[_Parte opcional_](#parte-opcional-hacker-edition) más arriba.

No se debe utilizar la _pseudo-variable_ `this`.

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias:

```text
.
├── package.json
├── README.md
├── src
│   ├── data
│   │   ├── injuries
│   │   │   ├── injuries.js
│   │   │   └── injuries.json
│   │   ├── lol
│   │   │   ├── lol.js
│   │   │   └── lol.json
│   │   ├── pokemon
│   │   │   ├── pokemon.js
│   │   │   └── pokemon.json
│   │   ├── steam
│   │   │   ├── steam.js
│   │   │   └── steam.json
│   │   └── worldbank
│   │       ├── worldbank.js
│   │       └── worldbank.json
│   ├── data.js
│   ├── index.html
│   ├── main.js
│   └── style.css
└── test
    └── data.spec.js

8 directories, 17 files
```

### `src/index.html`

Al igual que en el proyecto anterior, existe un archivo `index.html`. Como ya
sabrás, acá va la página que se mostrará al usuario. También nos sirve para
indicar qué scripts se usarán y unir todo lo que hemos hecho.

En este archivo encontrarás una serie de _etiquetas_ (_tags_) `<script>`
_comentadas_. Para _cargar_ las diferentes fuentes de datos tendrás que
_descomentar_ estas _etiquetas_. Cada uno estos scripts asignará una variable
global con la data correspondiente a esa fuente de datos.

Por ejemplo, si descomentamos la siguiente línea:

```html
<!-- <script src="./data/worldbank/worldbank.js"></script> -->
```

La línea quedaría así:

```html
<script src="./data/worldbank/worldbank.js"></script>
```

Y ahora tendríamos la variable global `WORLDBANK` disponible en nuestros otros
scripts (como `src/data.js` o `src/main.js`).

### `src/main.js`

Recomendamos usar `src/main.js` para todo tu código que tenga que ver con
mostrar los datos en la pantalla. Con esto nos referimos básicamente a la
interacción con el DOM. Operaciones como creación de nodos, registro de
manejadores de eventos (_event listeners_ o _event handlers_), ....

Esta no es la única forma de dividir tu código, puedes usar más archivos y
carpetas, siempre y cuando la estructura sea clara para tus compañeras.

### `src/data.js`

El corazón de este proyecto es la manipulación de datos a través de arreglos y
objetos. La idea de este archivo es contener toda la funcionalidad
que corresponda a obtener, procesar y manipular datos.

En este archivo esperamos que implementes las funciones detalladas en la sección
de [_Pruebas Unitarias_](#pruebas-unitarias).

### `src/data`

En esta carpeta están los datos de las diferentes fuentes. Encontrarás una
carpeta por cada fuente, y dentro de cada carpeta dos archivos: uno con la
extensión `.js` y otro `.json`. Ambos archivos contienen la misma data; la
diferencia es que el `.js` lo usaremos a través de una etiqueta `<script>`,
mientras que el `.json` está ahí para opcionalmente cargar la data de forma
asíncrona con [`fetch()`](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
(ver sección de [_Parte Opcional_](#parte-opcional-hacker-edition)).

### `test/data.spec.js`

Tendrás también que completar las pruebas unitarias de las funciones
implementadas en el archivo `data.js`.

## **8. Evaluación**
Recuerda revisar la [rúbrica](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vRktPN4ilZtkRN5tUb3DVhgeihwlzk63_-JI3moA-bXpKDbHDioAK2H3qbrwWNb0Ql4wX22Tgv7-PDv/pubhtml)
para ver la descripción detallada de cada habilidad y cada nivel. Esta es una
lista de todas las habilidades involucradas en este proyecto y que evaluaremos
cuando lo completes:

### **General**

| Característica/Habilidad |
|--------------------------|
| Completitud |

### **Tech**

| Habilidad |
|-----------|
| **JavaScript** |
| Estilo |
| Nomenclatura/semántica |
| Funciones/modularidad |
| Estructuras de datos |
| Tests |
| **HTML** |
| Validación |
| Estilo |
| Semántica |
| **CSS** |
| DRY |
| Responsive |
| **SCM** |
| Git |
| GitHub |
| **CS** |
| Lógica |
| Arquitectura |

### **UX**

| Habilidad |
|-----------|
| User Centricity |
| Visual Design |

### **Habilidades Blandas**

| Habilidad |
|-----------|
| Planificación y organización |
| Autoaprendizaje |
| Solución de problemas |
| Dar y recibir feedback |
| Adaptabilidad |
| Trabajo en equipo |
| Responsabilidad |
| Comunicación eficaz |
| Presentaciones |

***

## **Pistas sobre cómo empezar a trabajar en el proyecto**

Antes de empezar a escribir código, debes definir qué deberá hacer el producto
en base al conocimiento que puedas obtener de tu usuario. Estas preguntas te
pueden ayudar:

* ¿Quiénes son los principales usuarios de producto?
* ¿Cuáles son los objetivos de estos usuarios en relación con el producto?
* ¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?
* ¿Cuándo utilizan o utilizarían el producto?

Cuando ya estés lista para codear, te sugerimos empezar de esta manera:

1. Una de las integrantes del equipo debe realizar un :fork_and_knife:
   [fork](https://help.github.com/articles/fork-a-repo/) del repo de tu cohort,
   tus _coaches_ te compartirán un _link_ a un repo y te darán acceso de lectura
   en ese repo. La otra integrante del equipo deber hacer un fork **del
   repositorio de su compañera** y [configurar](https://gist.github.com/BCasal/026e4c7f5c71418485c1)
   un `remote` hacia el mismo.
2. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu _fork_ a tu computadora (copia local).
3. 📦 Instala las dependencias del proyecto con el comando `npm install`. Esto
   asume que has instalado [Node.js](https://nodejs.org/) (que incluye [npm](https://docs.npmjs.com/)).
4. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm test`.
5. A codear se ha dicho! :rocket:

<!--
En este proyecto deberás trabajar colaborativamente. Para ello, una de las
integrantes del equipo deberá forkear el repositorio del cohort y la otra
integrante **deberá hacer un fork del repositorio de su compañera**. Luego de
esto, deberás
[configurar](https://help.github.com/articles/configuring-a-remote-for-a-fork/)
un `remote` hacia el repositorio del cual hiciste el fork.

Para mandar cambios desde un repositorio forkeado al original debes crear un
[pull request](https://goo.gl/4bYnuh)
y el propietario del repositorio original recibirá una notificación para
[revisar el pull request](https://goo.gl/XSFcT5)
y [aceptar los cambios](https://goo.gl/HLJtqN).

Aquí algunas recomendaciones para que organices mejor el trabajo con tu
compañera:

* En lugar de trabajar en una sola rama o _branch_, puedes organizar el flujo de
  trabajo con dos ramas principales:
  - `master`: rama que contiene las funcionalidades terminadas y sin errores.
  - `develop`: rama dónde integrarás las funcionalidades conforme las vayas
    desarrollando.

* Además de tener las dos ramas anteriores, puedes trabajar cada nueva
  funcionalidad en una rama individual (_feature branches_), estas ramas en
  lugar de crearse a partir de `master`, tienen a `develop` como su rama de
  origen. Cuando una funcionalidad es terminada se integra de nuevo a `develop`.
  Las _feature branches_ no se deben integrar directamente a `master`.

* Por último, te sugerimos codear usando la técnica de
  [pair programming](https://goo.gl/uAMBX2).

¿Quieres saber más forks y pull requests?

* Un [fork](https://help.github.com/articles/fork-a-repo/) es una copia de un
  repositorio en el que puedes experimentar sin afectar al repositorio original.
  Generalmente se usa para proponer cambios al proyecto de alguien más o para
  usar el proyecto de otra persona como punto de partida para una idea que
  quieras realizar.

* Un [pull request](https://help.github.com/articles/about-pull-requests/) (PR)
  te permite solicitar la inclusión de cambios al repositorio original (tu punto
  de partida) en GitHub. Cuando un PR es abierto, este permite solicitar,
  discutir y revisar los cambios realizados con todos los colaboradores y
  agregar otros commits antes de que los cambios sean incluidos al repositorio
  original.
-->

***

## **10. Contenido de referencia**

### **Diseño de experiencia de usuario (User Experience Design)**

* Investigación con usuario
* [Principios de diseño visual](https://lms.laboratoria.la/cohorts/scl-2019-08-bc-core-scl011/courses/diseno-visual)


### **Desarrollo Front-end**

* [Unidad de testing en curso de JavaScript en LMS](https://lms.laboratoria.la/cohorts/scl-2019-08-bc-core-scl011/courses/javascript/11-testing/00-opening)
* [Unidad de arreglos en curso de JavaScript en LMS](https://lms.laboratoria.la/cohorts/scl-2019-08-bc-core-scl011/courses/javascript/04-arrays/01-arrays)
* [Unidad de objetos en curso de JavaScript en LMS](https://lms.laboratoria.la/cohorts/scl-2019-08-bc-core-scl011/courses/javascript/05-objects/01-objects)
* [Unidad de funciones en curso de JavaScript en LMS](https://lms.laboratoria.la/cohorts/scl-2019-08-bc-core-scl011/courses/javascript/03-functions/00-opening)
* [Unidad de DOM en curso de Browser JavaScript en LMS](https://lms.laboratoria.la/cohorts/scl-2019-08-bc-core-scl011/courses/browser/02-dom/00-opening)
* [Array en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array)
* [Array.sort en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort)
* [Array.map en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map)
* [Array.filter en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter)
* [Array.reduce en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce)
* [Array.forEach en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach)
* [Object.keys en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/keys)
* [Object.entries en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/entries)
* [Fetch API en MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [json.org](https://json.org/json-es.html)

### **Herramientas**

* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)
* [GitHub Pages](https://pages.github.com/)
* [Node.js](https://nodejs.org/)

***

## **Checklist**

* [ ] Usa VanillaJS.
* [ ] No hace uso de `this`.
* [ ] Pasa linter (`npm pretest`)
* [ ] Pasa tests (`npm test`)
* [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [ ] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [ ] Incluye historias de usuario en `README.md`.
* [ ] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [ ] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [ ] Incluye link a Zeplin en `README.md`.
* [ ] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [ ] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [ ] UI: Permite ordenar data por uno o más campos (asc y desc).
* [ ] UI: Permite filtrar data en base a una condición.
