import INITIAL_STATE from "../states/search"

export default function search(state = INITIAL_STATE, action){
    if(action.type === "SET_SEARCH"){
        return {
            ...state,
            search: action.search
        }
    }
    if(action.type === "SET_CURRENT_ITENS_FILTERED"){
        
        const lowerSearch = action.search ? action.search.toLowerCase() : null

        const currentItensFiltered = lowerSearch ? action.currentItens.filter((currentItem) => currentItem.name.toLowerCase().includes(lowerSearch)) : action.currentItens

        return {
            ...state,
            currentItensFiltered: currentItensFiltered
        }
    }
    return state
}