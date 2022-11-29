const INITIAL_STATE = {
    test: {},
    information: {},
}

export default function pokemon(state = INITIAL_STATE, action){
    if(action.type === 'SET_INFORMATION'){
        // console.log(action.lesson, action.module)
        return {
            information: action.information
        }
    }
    return state
}