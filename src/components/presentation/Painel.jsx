import React from "react";

import Informations from "./detail/Informations";
import Evolutions from "./detail/Evolutions";
import SameTypes from "./detail/SameTypes";
import Advantages from "./detail/Advantages";
import Disadvantages from "./detail/Disadvantages";

export default function Cards({selectedItem}){
    return (
        <div>
            {console.log(selectedItem)}
            <Informations/>
            <Evolutions/>
            <SameTypes/>
            <Advantages/>
            <Disadvantages/>
        </div>
    )
}