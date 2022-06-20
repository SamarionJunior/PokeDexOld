import React from "react";

export default function Card(props){
    return (
        <div className="Card">
            <p>{props.id}</p>
            <img src={props.url} alt={props.url}/>
            <p>{props.nome}</p>
            <p>{props.tipo}</p>
            <p>{props.ataque}</p>
        </div>
    )
}