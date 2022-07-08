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

// export function setOptions(options, currentItens){
//     return {
//         type: "SET_OPTIONS",
//         options,
//         currentItens
//     }
// }

export function setOptions(options){
    return {
        type: "SET_OPTIONS",
        options,
    }
}