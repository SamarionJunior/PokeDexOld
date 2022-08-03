import Form from 'react-bootstrap/Form';

import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as FilterActions from "../../../../store/actions/filter";

const selectors = [    
    {title: "Nenhum", isOrder: false, direction: null, property: null},
    {title: "Id Crescente", isOrder: true, direction: "ascending", property: "id"},
    {title: "Id Decrescente", isOrder: true, direction: "descending", property: "id"},
    {title: "Nome Crescente", isOrder: true, direction: "ascending", property: "name"},
    {title: "Nome Decrescente", isOrder: true, direction: "descending", property: "name"},
]

const Order = ({order, setOrder}) => {

    const [selected, setSelected] = useState({...order})

    useEffect(() => {
        setOrder(selected)
    }, [selected])
    
    return (
        <>
            <Form.Select aria-label="Default select example" value={selected.title} onChange={
                (e) => {
                    const titleSelected = String(e.target.value)
                    if(titleSelected){
                        const selectorFiltered = selectors.filter(selector => selector.title === titleSelected)[0]
                        setSelected(selectorFiltered)
                    }
                }
            }>
                {selectors.map(index => 
                    <option key={index.title} value={index.title} >
                        {index.title}
                    </option>
                )}
            </Form.Select>
        </>
    )
}

const mapStateToProps = state => ({
    order: state.filter.order
})

const mapDispatchToProps = dispatch => (
    bindActionCreators(FilterActions, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Order)






