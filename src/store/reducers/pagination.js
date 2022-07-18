import INITIAL_STATE from "../states/pagination"

export default function pagination(state = INITIAL_STATE, action){
    if(action.type === 'SET_ITENS'){
        return {
            ...state,
            itens: action.itens
        }
    }
    if(action.type === 'SET_ITENS_PER_PAGE'){
        return {
            ...state,
            itensPerPage: action.itensPerPage,
        }
    }
    if(action.type === 'SET_CURRENT_PAGE'){
        
        const currentPage = action.currentPage
        const startIndex = action.currentPage * action.itensPerPage
        const endIndex = startIndex + action.itensPerPage
        const currentItens = action.itens.slice(startIndex, endIndex)

        return {
            ...state,
            currentPage,
            startIndex,
            endIndex,
            currentItens,
        }
    }
    if(action.type === 'SET_PAGES'){
        return {
            ...state,
            pages: action.pages
        }
    }
    if(action.type === 'SET_START_INDEX'){
        return {
            ...state,
            startIndex: action.startIndex
        }
    }
    if(action.type === 'SET_END_INDEX'){
        return {
            ...state,
            endIndex: action.endIndex
        }
    }
    if(action.type === 'SET_CURRENT_ITENS'){
        
        const itensPerPage = action.itensPerPage
        const itens = action.itens
        const currentPage = 0
        const pages = Math.ceil(itens.length / itensPerPage)
        const startIndex = currentPage * itensPerPage
        const endIndex = startIndex + itensPerPage
        const currentItens = itens.slice(startIndex, endIndex)

        return {
            ...state,
            currentItens,
            itensPerPage,
            currentPage,
            pages,
            startIndex,
            endIndex,
        }
    }
    if(action.type === 'PUSH_LAST_ITEM_IN_SEQUENCE'){

        const sequence = action.sequence.length !== 0 ? action.sequence : [5, 15, 45]
        const lastItem = action.lastItem !== null ? action.lastItem : null

        if(lastItem !== null && lastItem > 45){
            if(sequence.length === 4){
                sequence.push(lastItem)
            }else if(sequence.length > 4){
                sequence.pop()
                sequence.push(lastItem)
            }
        }

        state.sequence = sequence

        return {
            ...state
        }
    }
    return state
}