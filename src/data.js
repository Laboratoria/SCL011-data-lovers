window.data = {
    //filtrar por tipo
    filterPokemons: (data, typeP) => {
        const filterPokemon = data.filter(element => {
            return element.type.includes(typeP)
        });
        return filterPokemon;
    },

    sortDataP: (data) => {
        sortDataP = data.sort((a, b) => {
            return a.name.localeCompare(b.name)
        });
        return sortDataP;
    }



};