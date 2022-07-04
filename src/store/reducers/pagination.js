import INITIAL_STATE from "../states/pagination"

export default function pagination(state = INITIAL_STATE, action){
    if(action.type === 'SET_ITENS_PER_PAGE'){
        return {
            ...state,
            ItensPerPage: action.ItensPerPage
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