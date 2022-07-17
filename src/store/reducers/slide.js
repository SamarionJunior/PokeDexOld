import INITIAL_STATE from "../states/slide"

export default function pokemon(state = INITIAL_STATE, action){
    if(action.type === 'SET_ITENS'){

        const itens = action.itens

        const options = action.options

        const pokemonSelected = action.pokemonSelected

        const itensOptioned = options.length !== 0 && itens !== 0 ? itens.filter(item => {
            return item.types.reduce((acc, type) => {
                return options.reduce((acc, option) => {
                    return (type.type.name === option) || acc
                }, false) || acc
            }, false) && item.name !== pokemonSelected.name
        }) : itens

        return {
            ...state,
            itens: itensOptioned
        }
    }
    return state
}