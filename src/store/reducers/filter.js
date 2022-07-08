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
    
    // if(action.type === "SET_OPTIONS"){
        
    //     const lowerOption = action.options.map(option => option.toLowerCase())

    //     const currentItensFiltered = action.currentItens.filter((currentItem) => 
    //         lowerOption.filter((acc, option) => {
    //             acc && currentItem.type.toLowerCase().includes(option.toLowerCase())
    //         }, true)
    //     )

    //     return {
    //         ...state,
    //         currentItensFiltered: currentItensFiltered
    //     }
    // }

    if(action.type === "SET_OPTIONS"){
        return {
            ...state,
            options: action.options
        }
    }

    return state
}