import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as FilterActions from "../../../../store/actions/filter";

const Search = ({setSearch}) => (
    <div>
        <input onChange={(e) => setSearch(String(e.target.value))} type="text" placeholder="Digite o nome do Pokemon!"/>
    </div>
)

const mapDispatchToProps = dispatch => (
    bindActionCreators(FilterActions, dispatch)
)

export default connect(null, mapDispatchToProps)(Search)