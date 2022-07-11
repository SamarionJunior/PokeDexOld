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

        const options = action.options ?? null

        const order = action.order ?? null

        const itens = action.itens ?? null

        const itensSearched = lowerSearch && itens ? itens.filter(item => item.name.toLowerCase().includes(lowerSearch)) : action.itens

        const itensOptioned = options && itens ? itensSearched.filter(item => 
            item.types.map(type => 
                options.map(option => 
                    type.type.name === option
                )
            )
        ) : itensSearched

        const itensOrdered = order && itens ? itensSearched.order(item => item.type) : itensOptioned

        return {
            ...state,
            currentItensFiltered: itensOrdered
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