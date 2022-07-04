import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Home = ({pokemons}) => {
    const pokemonName = pokemons.map(pokemon => pokemon.nome)
    // console.log(pokemonName)
    return (
        <div>
            <h1>Home</h1>
            <input type="text" placeholder="Digite o nome do Pokemon!"/>
            <input type="submit" placeholder="Pesquisar"/>
            <Link to="/gallery">Ver Todos</Link>
        </div>
    )
}

const mapStateToProps = state => (
    {pokemons: state.pokemon.pokemons}
)

export default connect(mapStateToProps)(Home)