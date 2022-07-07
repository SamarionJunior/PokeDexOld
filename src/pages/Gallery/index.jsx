import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as PokemonActions from "../../store/actions/pokemon";
import Pagination from "./Pagination";



const Gallery = ({pokemons, setSelectedPokemon}) => (
    <div>
        <h1>Gallery</h1>
        <input type="text" placeholder="Digite o nome do Pokemon!"/>
        <input type="submit" placeholder="Pesquisar"/>
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