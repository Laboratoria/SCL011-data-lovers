/* Manejo de data */


window.filter = {
    //Funcion que recorre la data y devuelve un array de objetos que tienen la propiedad masculina
    filterMale: (ricks) => {

        //Usando el metodo filter para obtener solo los array donde gender = male (Usando funcion flecha)
        let male = ricks.filter(obj => (obj.gender === "Male"));

        //console.log(male);

        //Retorno el resultado para recogerlo en el main.js
        return male;

    },


    //Funcion que recorre la data y devuelve un array de objetos que tienen la propiedad Femenina
    filterFemale: (ricks) => {

        //Usando el metodo filter para obtener solo los array donde gender = male (Usando funcion flecha)
        let female = ricks.filter(obj => (obj.gender === "Female"));

        console.log(female);

        //Retorno el resultado para recogerlo en el main.js
        return female;

    },


    //Funcion que recorre la data y devuelve un array de objetos que tienen la propiedad Desconocida
    filterUnknown: (ricks) => {

        //Usando el metodo filter para obtener solo los array donde gender = male (Usando funcion flecha)
        let unknown = ricks.filter(obj => (obj.gender === "unknown"));

        console.log(unknown);

        //Retorno el resultado para recogerlo en el main.js
        return unknown;

    }




}