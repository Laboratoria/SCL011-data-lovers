# ** Master Pokemon Go**

## **Índice**

* [Definición](#Definición)
* [Usuario](#Usuario)
* [Test de Usabilidad](#Test-de-Usabilidad)
* [Historias de Usuario](#Historias-de-Usuario)
* [Funciones de la página](#Funciones-de-la-Pagina)
* [Pruebas unitarias](#Pruebas-Unitarias)
* [Consideraciones técnicas](#consideraciones-técnicas)
* [Primeros pasos](#primeros-pasos)
* [Contenido de referencia](#contenido-de-referencia)
* [Checklist](#checklist)

***

## **1. Definición**

Es una página para usuarios intermedios y avanzados que juegan de forma constante y quieren conocer datos estadísticos del juego para mejorar sus opciones de jugabilidad.

## **2. Usuario **

Para conocer a nuestro usuario realizamos una encuesta a 59 personas donde destacamos que el jugador promedio es hombre (76%) de 25 a 35 años (66%) que juega diariamente (73%) , juega por nostalgia, usa aplicaciones para conocer las estadísticas de los Pokémon y lo hace desde su celular por lo que necesita una pagina responsive.
Los datos que más le importan en el juego son 

	- Caramelos
	- Huevos Pokémon
	- Spawn

## **3. Test de Usabilidad**

Realizamos un wireframe de baja fidelidad para poder guiarnos en la creación del prototipo de alta fidelidad de la página.
A continuación se presentan los primeros sketch que realizamos para nuestra página.

![Sketch1](https://github.com/PalomaZelada/SCL011-data-lovers/blob/master/images/sketch.jpg)


![Sketch2](https://github.com/PalomaZelada/SCL011-data-lovers/blob/master/images/sketch2.png)


Despues de validar este diseño con nuestras compañeras y creamos un wireframe de alta fidelidad.

![link](https://www.figma.com/proto/ftVbKZBnqh35lAhbHx0pkh/Data-lovers-Pokemon?node-id=2%3A2&scaling=scale-down)

 Éste fue testeado con 5 usuarios con distintos niveles de conocimiento, tanto del tema en cuestión como conocimientos digitales. Durante la prueba les entregamos a los usuarios tareas a realizar dentro de la página y con ayuda de la herramienta Loom grabamos sus comentarios.

- El primer usuario que testeo el prototipo no tenia conocimientos sobre el juego Pokemon Go ni los personajes.
[Test 1](https://www.loom.com/share/e5c4d6ea84f14ac1ac56659e2e25755b)

- El segundo usuario había utilizado la aplicación Pokemon Go hace un par de años y conocía la serie animada.
[Test 2](https://www.loom.com/share/90413eaa1d55433da5dc0befa9516c69)

- El tercer usuario era un experto en el tema, juega actualmente Pokemon Go y ubica características específicas de los Pokemon.
[Test 3](https://www.loom.com/share/ead6862678d742a0806fc9fe24e99da6)

- El cuarto usuario no utilizó la aplicación de juego, pero conocía la serie animada y sus personajes.
[Test 4](https://www.loom.com/share/5d39d52734d2421d87de7c96611ebd5c)

- El quinto usuario jugó Pokemon Go por un período de tiempo y conocía la serie y personajes.
[Test 5](https://www.loom.com/share/5d39d52734d2421d87de7c96611ebd5c)

La mayoría opinó que la página era fácil de usar y no era confusa, que tenía un diseño llamativo, pero pidieron mejorar algunos aspectos:

- Mejorar la tipografía de la página y los diseños de los titulos
- Explicar el uso de la página
- Disminuir el protagonismo de la Pokedex del inicio
- Que los botones se destaquen 

Entonces tomando en consideración las opiniones de los usuarios que realizaron el testeo decidimos implementar los cambios necesarios para mejorar el uso de la página.

## **4. Feedback **
En uno de los talleres de UX presentamos nuestro prototipo de alta fidelidad al Bootcamp y notamos que la pagina no era visualmente funcional ya que tenía muchas imágenes y colores los que no permitían una interacción orgánca con la pagina porque entregaba mucha información al usuario y lo distraía de lo escencial.
	Es por ello que decidimos simplificar el diseño de la pagina y hacerlo más funcional.


## **5. Historias de Usuario**

	• Historia de usuario : 
	“¡Yo como jugador de Pokémon Go!, quiero una pagina web para conocer todos los pokemon de Kanto y algunos datos relevantes del juegos”
➡ Criterios de aceptación: Creamos una web que muestre un buscador (pokedex) y una zona de estadisticas

	• Historia de usuario : 
	“¡Yo como jugador de Pokémon Go ! , quiero poder ver todos los Pokémon de la región de Kanto para así poder conocerlos o identificar los que no tengo”
➡ Criterios de aceptación: Creamos en la aplicación web un contenedor en la pantalla principal con todos los Pokémon para que el usuario pueda reconocerlos, identificarlos y acceder a su información inmediatamente.
	
	• Historia de usuario :
	 “¡Yo como jugador de Pokémon Go!, quiero ordenar los Pokémon por nombre para así poder encontrarlos fácilmente”
➡ Criterios de aceptación Creamos en la aplicación Web un selector en la pantalla, con opciones, ordenando por nombres (a-z) y viceversa, esto permite encontrarlos rápidamente según la opción que se escoja.
	
	• Historia de usuario : 
	“¡Yo como jugador de Pokémon Go!, quiero poder filtrar los Pokémon por su tipo para poder ver solo aquellos de mi tipo favorito”
➡ Criterios de aceptación Creamos en la aplicación Web un selector en la pantalla, con los tipos de pokemon, especificando los 15 tipos que existen en la primera generación.
	
	• Historia de usuario : 
	“¡Yo como jugador de Pokémon Go!, quiero poder seleccionar un Pokémon para obtener su información.
➡ Criterios de aceptación Creamos en la aplicación Web una carta de cada pokemon que al voltearse muestre en pantalla el la información del pokemon solicitado.

	• Historia de Usuario:
	 "¡¡Yo como jugador de Pokémon Go!, quiero conocer el porcentaje de Pokémon por tipo de huevos para saber en qué huevo puedo conseguir más variedad de pokemon"
➡ Criterios de aceptación La plataforma debe tener una sección de estadísticas donde exista un selector y el usuario escoja cada huevo para mostrar en una imagen todos los pokemón que aparecen en cada tipo de huevo.



## **6. Funciones de la página**

Dentro de la página planteamos tres funciones principales cada una dentro de un "select".
Se puede seleccionar el filtro por tipo, que despliega todos los tipos de Pokemon que existen en la región Kanto, que son 15 en total.
Se puede filtrar por aparición en huevos, en esta se encuentran cuatro parámetros que son 2,5 y 10 kilometros y que no aparece en huevos.
Y la última función es para ordenar de manera alfabética ascendente y descendente los nombres de los Pokemon.



### **7. Pruebas unitarias**

Realizamos pruebas unitarias para las tres funciones que creamos, en las cuales se declaró una constantes de muestra para poder realizar las pruebas por función en las cuales debían retornar si eran funciones (typeof) y realizar su función específica.




## **5. Diagrama de flujo de la página**



```text
.
├── package.json
├── README.md
├── Home
│   ├── Filtro Alfabetico
│   │   ├── A-Z
│   │   ├── Z-A
│   ├── Filtro por Tipo
│   │   ├── Normal
│   │   ├── Fuego
│   │   ├── Agua
│   │   ├── Planta
│   │   ├── Eléctrico
│   │   ├── Hielo
│   │   ├── Lucha
│   │   ├── Veneno
│   │   ├── Volador
│   │   ├── tierra
│   │   ├── Psíquico
│   │   ├── Bicho
│   │   ├── Roca
│   │   ├── Fantasma
│   │   ├── Dragón
│   │ 
│   ├─ Filtro por Huevos
│   │       ├── 2km
│   │       ├── 5km
│   │       ├── 10km
│   │       ├── No aparece en huevos


```
.


## **8. Organización del Equipo **

Master: Romina Garrido.
Developer: Paloma Zelada.
