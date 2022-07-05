export function setItensPerPage(itensPerPage){
    return {
        type: "SET_ITENS_PER_PAGE",
        itensPerPage
    }
}

export function setCurrentPage(currentPage){
    return {
        type: "SET_CURRENT_PAGE",
        currentPage
    }
}

export function setPages(pages){
    return {
        type: "SET_PAGES",
        pages
    }
}

export function setStartIndex(startIndex){
    return {
        type: "SET_START_INDEX",
        startIndex
    }
}

export function setEndIndex(endIndex){
    return {
        type: "SET_END_INDEX",
        endIndex
    }
}

export function setCurrentItens(currentItens){
    return {
        type: "SET_CURRENT_ITENS",
        currentItens
    }
}