import "./style.css";

import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as FilterActions from "../../../store/actions/filter"

import Search from "./Search";
import Option from "./Option";
import Order from "./Order";

const Filter = ({search, options, order, pokemons, setCurrentItensFiltered}) => {

    useEffect(() => {
        setCurrentItensFiltered(search, options, order, pokemons)
    }, [search, options, order, pokemons])

    return (
        <div className="Filter">
            <Search></Search>
            <Option></Option>
            <Order></Order>
        </div>
    )
}

const mapStateToProps = state => ({
    pokemons: state.pokemon.pokemons,
    search: state.filter.search,
    options: state.filter.options,
    order: state.filter.order,
})

const mapDispatchToProps = dispatch => bindActionCreators(FilterActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Filter)