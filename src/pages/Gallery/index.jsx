import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as PokemonActions from "../../store/actions/pokemon";
import Pagination from "./Pagination";



const Gallery = ({pokemons, setSelectedPokemon}) => (
    <div>
        <Pagination></Pagination>
        <Link to="/">Inicio</Link>
    </div>
)

const mapStateToProps = state => {
    return {pokemons: state.pokemon.pokemons}
}

const mapDispatchToProps = dispatch => (
    bindActionCreators(PokemonActions, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)