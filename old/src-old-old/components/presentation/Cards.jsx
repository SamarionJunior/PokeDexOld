import React from "react";

import Card from './Card'

export default function Cards({currentItens}){
    return (
        <div>
            {currentItens.map(pokemon => (
            <Card 
                item = {pokemon}
                key={pokemon?.id}
                id={pokemon?.id}
                url={pokemon?.sprites}
                nome={pokemon?.name}
                tipos={pokemon?.types}
                // ataque={pokemon?.abilities?.[0].ability?.name}
                ataques={pokemon?.abilities}
            />
            ))}
        </div>
    )
}