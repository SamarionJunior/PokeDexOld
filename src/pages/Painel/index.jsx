import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Painel = ({pokemonSelected}) => (
    <div>
        <h1>{pokemonSelected.nome}</h1>
        <Link to="/">Voltar</Link>
    </div>
)

const mapStateToProps = state => (
    {pokemonSelected: state.pokemon.pokemonSelected}
)

export default connect(mapStateToProps)(Painel)