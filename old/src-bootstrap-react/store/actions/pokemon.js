export function setPokemons(pokemons){
    return {
        type: "SET_POKEMONS",
        pokemons
    }
}
export function setSelectedPokemon(pokemonSelected){
    return {
        type: "SET_SELECTED_POKEMON",
        pokemonSelected
    }
}