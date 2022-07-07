import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as SearchActions from "../../../store/actions/search";

const Search = ({setSearch}) => (
    <div>
        <input onChange={(e) => setSearch(String(e.target.value))} type="text" placeholder="Digite o nome do Pokemon!"/>
    </div>
)

const mapDispatchToProps = dispatch => (
    bindActionCreators(SearchActions, dispatch)
)

export default connect(null, mapDispatchToProps)(Search)