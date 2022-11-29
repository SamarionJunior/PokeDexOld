export function setItens(itens, options, pokemonSelected){
    return {
        type: "SET_ITENS",
        itens,
        options,
        pokemonSelected
    }
}