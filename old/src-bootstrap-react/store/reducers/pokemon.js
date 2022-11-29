import INITIAL_STATE from "../states/pokemon"

export default function pokemon(state = INITIAL_STATE, action){
    if(action.type === 'SET_POKEMONS'){
        return {
            ...state,
            pokemons: action.pokemons
        }
    }
    if(action.type === 'SET_SELECTED_POKEMON'){
        return {
            ...state,
            pokemonSelected: action.pokemonSelected
        }
    }
    return state
}