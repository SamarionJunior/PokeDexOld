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

        const itensOptioned = options && itens ? itensSearched.filter(item => {
            console.log(item.types)
            return item.types.reducer((acc, type) => {
                console.log(acc, type)
                // return options.reducer((acc, option) => {
                //     return (type.type.name === option) && acc
                // }, [true]) && acc
            }, true)
        }) : itensSearched

        console.log(itensOptioned)

        if(action.order.isOrder){
            const itensOrdered = order.isOrder && itens ? itensOptioned.sort((a, b) => {
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