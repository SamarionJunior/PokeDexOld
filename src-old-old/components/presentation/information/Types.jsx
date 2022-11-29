import React from "react";

export default function Types({id, tipos}){
    return (
        <div>
            {tipos.map(infor => 
                infor && infor.type && infor.type.name?    
                    <p key={`${id}-${infor.type.name}`}>{infor.type.name}</p>
                    : null)}
        </div>
    )
}