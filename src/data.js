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
        let female = ricks.filter(element => (element.gender === "Female"));


        //Retorno el resultado para recogerlo en el main.js
        return female;

    },


    //Funcion que recorre la data y devuelve un array de objetos que tienen la propiedad Desconocida
    filterUnknown: (ricks) => {

        //Usando el metodo filter para obtener solo los array donde gender = male (Usando funcion flecha)
        let unknown = ricks.filter(element => (element.gender === "unknown"));


        //Retorno el resultado para recogerlo en el main.js
        return unknown;



    },

    orderdata: (ricks) => {
        ricks.sort((nameone, nametwo) => nameone.name.localeCompare(nametwo.name));

        return ricks;

    },
    
    apparitionPercent: (episodes) => {
        let percentajeTotal = Math.round((episodes * 100) / 31);
        return percentajeTotal;
    
      }
    




}

