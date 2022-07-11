import INITIAL_STATE from "../states/filter"

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

    if(action.type === "SET_OPTIONS"){
        return {
            ...state,
            options: action.options
        }
    }

    if(action.type === "SET_ORDER"){
        return {
            ...state,
            title: action.title,
            isOrder: action.isOrder,
            direction: action.direction,
            property: action.property,
        }
    }

    return state
}