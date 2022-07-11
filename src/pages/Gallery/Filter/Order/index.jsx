import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as FilterActions from "../../../../store/actions/filter";

/// ascending or descending

const selectors = [    
    {title: "Nenhum", isOrder: false, direction: null, property: null},
    {title: "Id Crescente", isOrder: true, direction: "ascending", property: "id"},
    {title: "Id Decrescente", isOrder: true, direction: "descending", property: "id"},
    {title: "Nome Crescente", isOrder: true, direction: "ascending", property: "name"},
    {title: "Nome Decrescente", isOrder: true, direction: "descending", property: "name"},
]

function find(itens, key){
    return itens.filter(item => item.title === key)
}

const Order = ({setOrder}) => {

    const [selected, setSelected] = useState({})

    useEffect(() => {
        setOrder(selected.title, selected.isOrder, selected.direction, selected.property)
    }, [selected])
    
    return (
        <div>
            <select value={selected} onChange={
                (e) => {
                    const titleSelected = String(e.target.value)
                    if(titleSelected){
                        const selector = selectors.filter(sel => sel.title === titleSelected)
                        {console.log(titleSelected, selector)}
                        setSelected(selector.title, selector.isOrder, selector.direction, selector.property)
                    }
                }
            }>
                {selectors.map(index => 
                    <option key={index.title} value={title} >
                        {index.title}
                    </option>
                )}
            </select>
        </div>
    )
}

const mapDispatchToProps = dispatch => (
    bindActionCreators(FilterActions, dispatch)
)

export default connect(null, mapDispatchToProps)(Order)






