const INITIAL_STATE = {
    pokemons: [
        {id: 0, name: "aa", types: [
            {type: {name: "agua"}}
        ]},
        {id: 1, name: "ba", types: [
            {type: {name: "terra"}}
        ]},
        {id: 2, name: "ca", types: [
            {type: {name: "fogo"}}
        ]},
        {id: 3, name: "db", types: [
            {type: {name: "ar"}}
        ]},
        {id: 4, name: "eb", types: [
            {type: {name: "agua"}},
            {type: {name: "terra"}}
        ]},
        {id: 5, name: "fb", types: [
            {type: {name: "fogo"}},
            {type: {name: "ar"}}
        ]},
        {id: 6, name: "gc", types: [
            {type: {name: "terra"}},
            {type: {name: "fogo"}}
        ]},
        {id: 7, name: "hc", types: [
            {type: {name: "agua"}},
            {type: {name: "ar"}}
        ]},
        {id: 8, name: "ic", types: [
            {type: {name: "terra"}},
            {type: {name: "ar"}}
        ]},
    ],
    pokemonSelected: {id: 8, name: "ic", types: [
        {type: {name: "terra"}},
        {type: {name: "ar"}}
    ]}
}

export default INITIAL_STATE