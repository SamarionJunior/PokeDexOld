import { useState } from "react";

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

    function order(element){
        element.sort(function(a, b){
            if(a.order > b.order){
                return 1
            }
            if(a.order < b.order){
                return -1
            }
                return 0
        })
        return element
    }

    return{
        pokemons,
        setPokemons,
        urls,
        setUrls,
        extractIndex,
        mountURLs,
        order
    }
}

