import Form from 'react-bootstrap/Form';

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as PaginationActions from "../../../../store/actions/pagination";

const Selector = ({sequence, itensPerPage, setItensPerPage}) => {
    
    const [options, setOptions] = useState([])

    useEffect(() => {
        setOptions(sequence ?? [])
    }, [sequence])

    return (
        <>
            <Form.Select aria-label="Default select example" value={itensPerPage} onChange={(e) => setItensPerPage(Number(+e.target.value))}>
                {options.map(index => 
                    <option key={index} value={index}>
                        {index}
                    </option>
                )}
            </Form.Select>
        </>
    )
}

const mapStateToProps = state => ({
    sequence: state.pagination.sequence,
    itensPerPage: state.pagination.itensPerPage
})

const mapDispatchToProps = dispatch => bindActionCreators(PaginationActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Selector)




