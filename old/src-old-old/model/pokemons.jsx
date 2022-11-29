import { useState } from "react";

import {getData, getDatas} from "../api/api";

export default function Pokemons(){
    
    const [pokemons, setPokemons] = useState([]);

    const [urls, setUrls] = useState()

    function extractIndex(urlList){
        return urlList.results.map(pokemon => 
            pokemon.url.split('https://pokeapi.co/api/v2/pokemon/')[1]
        )
    }

    function mountURLs(urls){
        return urls?.map((url) =>
            "/pokemon/" + url
        )
    }

    function pokemonOrder(a, b){
        if(a.order > b.order){
            return 1
        }
        if(a.order < b.order){
            return -1
        }
            return 0
    }

    function order(element, pokemonOrder){
        element.sort(pokemonOrder)
        return element
    }

    async function initPokemons(site){
        const data = await getData(site)
        const index = await extractIndex(data)
        const urls = await mountURLs(index)
        const pokemonsOutOfOrder = await getDatas(urls)
        const pokemonsInOrder = await order(pokemonsOutOfOrder, pokemonOrder)
        setPokemons(pokemonsInOrder)
    }

    return{
        pokemons,
        setPokemons,
        urls,
        setUrls,
        extractIndex,
        mountURLs,
        order,
        initPokemons
    }
}

