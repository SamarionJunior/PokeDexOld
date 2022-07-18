import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";

import * as PokemonActions from "../../store/actions/pokemon"

const Card = ({item, setSelectedPokemon}) => (
    <div>
        {item.name}
        <Link to="/painel" onClick={() => setSelectedPokemon(item)}>Selecionar</Link>
    </div>
)

const mapDispatchToProps = dispatch => bindActionCreators(PokemonActions, dispatch)

export default connect(null, mapDispatchToProps)(Card)
