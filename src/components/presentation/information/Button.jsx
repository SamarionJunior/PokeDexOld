import React from "react";

export default function Attacks({name, setSelectedItem, item}){
    return (
        <button onClick={() => setSelectedItem(item)}>{name}</button>
    )
}