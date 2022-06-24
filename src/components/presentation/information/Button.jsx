import React from "react";
import { Link } from "react-router-dom";

export default function Attacks({name, setSelectedItem, item}){
    return (
        <div>
            <Link to="/painel" onClick={() => {setSelectedItem(item)}}>{name}</Link>
        </div>
    )
}