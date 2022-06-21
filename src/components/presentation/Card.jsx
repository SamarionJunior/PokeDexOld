import React from "react";

import Images from './information/Images'
import Types from './information/Types'
import Attack from './information/Attacks'
import Button from './information/Button'

export default function Card({item, setSelectedItem, id, url, nome, tipos, ataques}){
    return (
        <div>
            <p>{id}</p>
            <Images url={url}/>
            <p>{nome}</p>
            <Types tipos={tipos}/>
            <Attack ataques={ataques}/>
            <Button name={"Ver Mais"} setSelectedItem={setSelectedItem} item={item}/>
        </div>
    )
}