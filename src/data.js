window.filter = {



    //Funcion que recorre la data y devuelve un array de objetos que tienen la propiedad masculina
    filterMale: (ricks) => {

        //Usando el metodo filter para obtener solo los array donde gender = male (Usando funcion flecha)
        let male = ricks.filter(obj => (obj.gender === "Male"));




        //Retorno el resultado para recogerlo en el main.js
        return male;



    },


    //Funcion que recorre la data y devuelve un array de objetos que tienen la propiedad Femenina
    filterFemale: (ricks) => {

        //Usando el metodo filter para obtener solo los array donde gender = male (Usando funcion flecha)
        let female = ricks.filter(obj => (obj.gender === "Female"));


        //Retorno el resultado para recogerlo en el main.js
        return female;

    },


    //Funcion que recorre la data y devuelve un array de objetos que tienen la propiedad Desconocida
    filterUnknown: (ricks) => {

        //Usando el metodo filter para obtener solo los array donde gender = male (Usando funcion flecha)
        let unknown = ricks.filter(obj => (obj.gender === "unknown"));


        //Retorno el resultado para recogerlo en el main.js
        return unknown;



    },


    //Ordenando la data


}

window.sorterRicks = {

    // se llama a la opcion y al data
    orrderData: (ricks, option) => {
        let filterOrder = "hola"
        console.log(filterOrder);
        localeCompare: ordena
        if (option == 'az') {
            filterOrder = ricks.sort((a, b) => {
                console.log("ok");
                return a.name.localeCompare(b.name);
            });
        }
        return filterOrder;
    },
}