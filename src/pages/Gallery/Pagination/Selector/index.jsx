import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as PaginationActions from "../../../../store/actions/pagination";

const Selector = ({itensPerPage, setItensPerPage}) => {

    const sequence = [1,2,3,4,5,6,7,8,9]
    
    return (
        <div>
            <select value={itensPerPage} onChange={(e) => setItensPerPage(Number(+e.target.value))}>
                {sequence.map(index => <option key={index} value={index}>{index}</option>)}
            </select>
        </div>
    )
}

const mapStateToProps = state => ({
    itensPerPage: state.pagination.itensPerPage,
})

const mapDispatchToProps = dispatch => bindActionCreators(PaginationActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Selector)




