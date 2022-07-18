import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as ListActions from "../../store/actions/list"

import Pagination from "./Pagination";
import Filter from "./Filter";
import List from "../../components/List";

const Gallery = ({currentItens, setItens}) => {

    useEffect(() => {
        setItens(currentItens)
    }, [currentItens])

    return (
        <div>
            <h1>Gallery</h1>
            <Filter></Filter>
            <Pagination>
                <List></List>
            </Pagination>
            <Link to="/">Inicio</Link>
        </div>
    )
}

const mapStateToProps = state => ({
    currentItens: state.pagination.currentItens,
})

const mapDispatchToProps = dispatch => bindActionCreators(ListActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)