import React from "react";

export default function Attacks({name, setSelectedItem, item}){
    return (
        <div>
            <button onClick={() => {setSelectedItem(item)}}>{name}</button>
        </div>
    )
}