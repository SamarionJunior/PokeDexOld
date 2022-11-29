

import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as FilterActions from "../../../../store/actions/filter";

const Search = ({search, setSearch}) => (
    <>
        <input value={search} onChange={(e) => setSearch(String(e.target.value))} type="text" placeholder="Digite o nome do Pokemon!"/>
    </>
)

const mapStateToProps = state => ({
    search: state.filter.search
})

const mapDispatchToProps = dispatch => (
    bindActionCreators(FilterActions, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Search)