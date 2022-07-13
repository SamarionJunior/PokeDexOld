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

        const options = action.options !== [] ? action.options : null

        const order = action.order !== false ? action.order : null

        const itens = action.itens !== [] ? action.itens : null

        const itensSearched = lowerSearch !== "" && itens !== [] ? itens.filter(item => item.name.toLowerCase().includes(lowerSearch)) : itens

        console.log(itensSearched, itens)

        const itensOptioned = options !== [] && itensSearched !== [] ? itensSearched.filter(item => {
            return item.types.reduce((acc, type) => {
                return options.reduce((acc, option) => {
                    return (type.type.name === option) || acc
                }, false) || acc
            }, false)
        }) : itensSearched

        console.log(itensSearched, itens)

        if(action.order.isOrder){
            const itensOrdered = order.isOrder !== false && itensOptioned !== [] ? itensOptioned.sort((a, b) => {
                if(action.order.direction === "ascending"){
                    if (a[action.order.property] > b[action.order.property]) {
                        return 1;
                    }
                    if (a[action.order.property] < b[action.order.property]) {
                        return -1;
                    }
                    return 0;
                }else if(action.order.direction === "descending"){
                    if (a[action.order.property] > b[action.order.property]) {
                        return 1;
                    }
                    if (a[action.order.property] < b[action.order.property]) {
                        return -1;
                    }
                    return 0;
                }

            }) : itensOptioned

            return {
                ...state,
                currentItensFiltered: itensOrdered
            }

        }else{
            const itensOrdered = itensOptioned

            return {
                ...state,
                currentItensFiltered: itensOrdered
            }
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
            order: action.order,
        }
    }

    return state
}