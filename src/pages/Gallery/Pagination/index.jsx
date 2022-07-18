import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as PaginationActions from "../../../store/actions/pagination";
import * as FilterActions from "../../../store/actions/filter"
import * as ListActions from "../../../store/actions/list"

import Selector from "./Selector";
import List from "./List";
import Buttons from "./Buttons";

const Pagination = ({pokemons, search, options, order, itensPerPage, currentItens, setCurrentItens, currentItensFiltered, setCurrentItensFiltered, setItens}) => {
    useEffect(() => {
        setCurrentItensFiltered(search, options, order, pokemons)
    }, [search, options, order, pokemons])
    useEffect(() => {
        setCurrentItens(itensPerPage, currentItensFiltered)
    }, [itensPerPage, currentItensFiltered])
    useEffect(() => {
        setItens(currentItens)
    }, [currentItens])
    return (
        <div>
            <Selector></Selector>
            <List></List>
            <Buttons></Buttons>
        </div>
    )
}

const mapStateToProps = state => ({
    pokemons: state.pokemon.pokemons,
    search: state.filter.search,
    options: state.filter.options,
    order: state.filter.order,
    currentItensFiltered: state.filter.currentItensFiltered,
    itensPerPage: state.pagination.itensPerPage,
    currentItens: state.pagination.currentItens,
})

const mapDispatchToProps = dispatch => bindActionCreators({...ListActions, ...FilterActions, ...PaginationActions}, dispatch)
    
    
export default connect(mapStateToProps, mapDispatchToProps)(Pagination)