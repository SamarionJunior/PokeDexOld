const INITIAL_STATE = {
    test: {},
    information: [
        {id: 0, nome: "a"},
        {id: 1, nome: "b"},
        {id: 2, nome: "c"},
    ],
    itemSelected: "",
}

export default function pokemon(state = INITIAL_STATE, action){
    if(action.type === 'SET_SELECTED_ITEM'){
        // console.log(action.lesson, action.module)
        return {
            ...state,
            itemSelected: action.itemSelected
        }
    }
    return state
}