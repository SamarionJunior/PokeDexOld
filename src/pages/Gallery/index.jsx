import "../../style.css"
import "./style.css"

import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as ListActions from "../../store/actions/list"

import Pagination from "./Pagination";
import Filter from "./Filter";
import List from "../../components/List";
import Toggle from '../../components/Toggle';

const Gallery = ({currentItens, setItens}) => {
    
    useEffect(() => {
        setItens(currentItens)
    }, [currentItens]) // eslint-disable-next-line

    return (
        <div className="Gallery">
            <h1 className="TitleGallery TextShadow">Gallery</h1>
            <Toggle>
                <Filter></Filter>
            </Toggle>
            <Pagination>
                <List></List>
            </Pagination>
            <Link to="/" className="HomeLink BoxShadow">Inicio</Link>
        </div>
    )
}

const mapStateToProps = state => ({
    currentItens: state.pagination.currentItens,
})

const mapDispatchToProps = dispatch => bindActionCreators(ListActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)