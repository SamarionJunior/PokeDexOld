

import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux"

import * as PokemonActions from "./../../../../store/actions/pokemon"

const Card = ({item, setSelectedPokemon}) => (
    <>
        <p>{item?.id}</p>
        <p>{item?.name}</p>
        <button onClick={() => setSelectedPokemon(item)}>Ver Mais</button>
    </>
)

const mapDispatchToProps = dispatch => bindActionCreators(PokemonActions, dispatch)

export default connect(null, mapDispatchToProps)(Card)