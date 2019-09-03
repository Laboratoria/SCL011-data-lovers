# ** Master Pokemon Go**

## **Índice**

* [Preámbulo](#preámbulo)
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


Despues de validar este diseño con nuestras compañeras y creamos un wireframe de alta fidelidad el que testeamos con 5 usuarios con distintos niveles de conocimiento, tanto del tema en cuestión como conocimientos digitales. Durante la prueba les entregamos a los usuarios tareas a realizar dentro de la página y con ayuda de la herramienta Loom grabamos sus comentarios.
La mayoría opinó que la página era fácil de usar y no era confusa, que tenía un diseño llamativo, pero pidieron mejorar algunos aspectos:

- Mejorar la tipografía de la página y los diseños de los titulos
- Explicar el uso de la página
- Disminuir el protagonismo de la Pokedex del inicio
- Que los botones se destaquen 

Entonces tomando en consideración las opiniones de los usuarios que realizaron el testeo decidimos implementar los cambios necesarios para mejorar el uso de la página.


## **4. Historias de Usuario**

	• Historia de usuario : “¡Yo como jugador de Pokémon Go!, quiero una pagina web para conocer todos los pokemon de Kanto y algunos datos relevantes del juegos”
➡ Criterios de aceptación: Creamos una web que muestre un buscador (pokedex) y una zona de estadisticas
	• Historia de usuario : “¡Yo como jugador de Pokémon Go ! , quiero poder ver todos los Pokémon de la región de Kanto para así poder conocerlos o identificar los que no tengo”
➡ Criterios de aceptación: Creamos en la aplicación web un contenedor en la pantalla principal con todos los Pokémon para que el usuario pueda reconocerlos, identificarlos y acceder a su información inmediatamente.
	• Historia de usuario : “¡Yo como jugador de Pokémon Go!, quiero ordenar los Pokémon por nombre y por número para así poder encontrarlos fácilmente”
➡ Criterios de aceptación Creamos en la aplicación Web un selector en la pantalla, con 4 opciones, ordenando por nombres (a-z), números y viceversa, esto permite encontrarlos rápidamente según la opción que se escoja.
	• Historia de usuario : “¡Yo como jugador de Pokémon Go!, quiero poder filtrar los Pokémon por su tipo para poder ver solo aquellos de mi tipo favorito”
➡ Criterios de aceptación Creamos en la aplicación Web un selector en la pantalla, con los tipos de pokemon, especificando los 15 tipos que existen en la primera generación.
	• Historia de usuario : “¡Yo como jugador de Pokémon Go!, quiero poder seleccionar un Pokémon para obtener su información.
➡ Criterios de aceptación Creamos en la aplicación Web una carta de cada pokemon que al voltearse muestre en pantalla el la información del pokemon solicitado.
	• Historia de Usuario: "¡¡Yo como jugador de Pokémon Go!, quiero conocer el porcentaje de Pokémon por tipo de huevos para saber en qué huevo puedo conseguir más variedad de pokemon"
➡ Criterios de aceptación La plataforma debe tener una sección de estadísticas donde exista un selector y el usuario escoja cada huevo para mostrar en una imagen todos los pokemón que aparecen en cada tipo de huevo.

## **5. Criterios de Aceptación Mínimos del Proyecto**


### **5.1 Definición del producto**


### **5.2 Historias de usuario**



### **5.3 Diseño de la Interfaz de Usuario**

#### Prototipo de baja fidelidad



#### Prototipo de alta fidelidad



#### Testeos de usabilidad



### **5.4 Implementación de la Interfaz de Usuario (HTML/CSS/JS)**



### **5.5 Pruebas unitarias**


## **6. Parte Opcional (Hacker edition)**



## **7. Consideraciones técnicas**



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
.

### `src/index.html`



### `src/data.js`



### `src/data`



### `test/data.spec.js`
## **8. Organización del Equipo **

master: Romina Garrido.
develop: Paloma Zelada.
