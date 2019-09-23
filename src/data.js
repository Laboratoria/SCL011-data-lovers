window.data = {
    //filtrar por tipo
    filterPokemons: (data, typeP) => {
        const filterPokemon = data.filter(element => {
            return element.type.includes(typeP)
        });
        return filterPokemon;
    }

};