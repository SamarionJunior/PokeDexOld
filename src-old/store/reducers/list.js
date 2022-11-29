import INITIAL_STATE from "../states/list"

export default function list(state = INITIAL_STATE, action){
    if(action.type === 'SET_ITENS'){
        return {
            ...state,
            itens: action.itens
        }
    }
    return state
}