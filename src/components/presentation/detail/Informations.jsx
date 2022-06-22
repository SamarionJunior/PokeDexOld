import React from "react";

import Images from '../information/Images'
import Types from '../information/Types'
import Attack from '../information/Attacks'

export default function Informations({selectedItem}){
    return (
        <div>
            {selectedItem && selectedItem.id && selectedItem.sprites && selectedItem.name && selectedItem.types && selectedItem.abilities ?
                <div>
                    <p>{selectedItem?.id}</p>
                    <Images url={selectedItem?.sprites}/>
                    <p>{selectedItem?.name}</p>
                    <Types tipos={selectedItem?.types}/>
                    <Attack ataques={selectedItem?.abilities}/>
                </div>
                :null}
        </div>
    )
}