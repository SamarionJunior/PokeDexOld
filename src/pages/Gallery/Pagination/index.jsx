import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as PaginationActions from "../../../store/actions/pagination";
import * as FilterActions from "../../../store/actions/filter"

import Selector from "./Selector";
import Buttons from "./Buttons";

const Pagination = ({children, pokemons, itensPerPage, setCurrentItens, currentItensFiltered, sequence, pushLastItemInSequence}) => {
    
    useEffect(() => {
        pushLastItemInSequence(sequence, pokemons.length !== 0 ? pokemons.length : null)
    }, [pokemons])
    
    useEffect(() => {
        setCurrentItens(itensPerPage, currentItensFiltered)
    }, [itensPerPage, currentItensFiltered])

    return (
        <div>
            <Selector></Selector>
            {children}
            <Buttons></Buttons>
        </div>
    )
}

const mapStateToProps = state => ({
    pokemons: state.pokemon.pokemons,
    currentItensFiltered: state.filter.currentItensFiltered,
    itensPerPage: state.pagination.itensPerPage,
    sequence: state.pagination.sequence,
})

const mapDispatchToProps = dispatch => bindActionCreators({...FilterActions, ...PaginationActions}, dispatch)
    
    
export default connect(mapStateToProps, mapDispatchToProps)(Pagination)