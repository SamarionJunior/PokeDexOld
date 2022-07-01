import React from "react";

export default function Attacks({id, ataques}){
    return (
        <div>
            {ataques.map(infor => 
                infor && infor.ability && infor.ability.name ?
                    <p key={`${id}-${infor.ability.name}`}>{infor.ability.name}</p> 
                    : null)}
        </div>
    )
}