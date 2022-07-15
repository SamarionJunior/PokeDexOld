import INITIAL_STATE from "../states/slide"

export default function pokemon(state = INITIAL_STATE, action){
    if(action.type === 'SET_ITENS'){
        return {
            ...state,
            itens: action.itens
        }
    }
    return state
}