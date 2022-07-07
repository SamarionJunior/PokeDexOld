import INITIAL_STATE from "../states/pagination"

export default function pagination(state = INITIAL_STATE, action){
    if(action.type === 'SET_ITENS'){
        return {
            ...state,
            itens: action.itens
        }
    }
    if(action.type === 'SET_ITENS_PER_PAGE'){
        
        const itensPerPage = action.itensPerPage
        const currentPage = 0
        const pages = Math.ceil(action.itens.length / action.itensPerPage)
        const startIndex = currentPage * action.itensPerPage
        const endIndex = startIndex + action.itensPerPage
        const currentItens = action.itens.slice(startIndex, endIndex)

        return {
            ...state,
            itensPerPage,
            currentPage,
            pages,
            startIndex,
            endIndex,
            currentItens,
        }
    }
    if(action.type === 'SET_CURRENT_PAGE'){
        return {
            ...state,
            currentPage: action.currentPage
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
        return {
            ...state,
            currentItens: action.currentItens
        }
    }
    return state
}