import React from "react";

export default function Images({id, url}){
    return (
        <div>
            {Object.keys(url).map(
                (key, value) => 
                    url[key] && !(typeof(url[key]) === "object") ?
                        <img src={url[key]} alt={`${id}-${key}`} key={`${id}-${key}`}/>
                        : null)}
        </div>
    )
}