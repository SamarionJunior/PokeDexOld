export function setSearch(search,){
    return {
        type: "SET_SEARCH",
        search
    }
}

export function setCurrentItensFiltered(search, currentItens){
    return {
        type: "SET_CURRENT_ITENS_FILTERED",
        search,
        currentItens
    }
}