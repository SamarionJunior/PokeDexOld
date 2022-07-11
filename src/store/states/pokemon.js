const INITIAL_STATE = {
    pokemons: [
        {id: 0, name: "a", types: [
            {type: {name: "agua"}}
        ]},
        {id: 1, name: "b", types: [
            {type: {name: "terra"}}
        ]},
        {id: 2, name: "c", types: [
            {type: {name: "fogo"}}
        ]},
        {id: 3, name: "d", types: [
            {type: {name: "ar"}}
        ]},
        {id: 4, name: "e", types: [
            {type: {name: "agua"}},
            {type: {name: "terra"}}
        ]},
        {id: 5, name: "f", types: [
            {type: {name: "fogo"}},
            {type: {name: "ar"}}
        ]},
        {id: 6, name: "g", types: [
            {type: {name: "terra"}},
            {type: {name: "fogo"}}
        ]},
        {id: 7, name: "h", types: [
            {type: {name: "aguar"}},
            {type: {name: "ar"}}
        ]},
        {id: 8, name: "i", types: [
            {type: {name: "terra"}},
            {type: {name: "ar"}}
        ]},
    ],
    pokemonSelected: {id: 0, name: "a"},
}

export default INITIAL_STATE