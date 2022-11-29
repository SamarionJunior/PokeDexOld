export function setSearch(search,){
    return {
        type: "SET_SEARCH",
        search
    }
}

export function setCurrentItensFiltered(search, options, order, itens){
    return {
        type: "SET_CURRENT_ITENS_FILTERED",
        search,
        options,
        order,
        itens
    }
}

export function setOptions(options){
    return {
        type: "SET_OPTIONS",
        options
    }
}

export function setOrder(order){
    return {
        type: "SET_ORDER",
        order
    }
}