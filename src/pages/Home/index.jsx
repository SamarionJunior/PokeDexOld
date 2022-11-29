

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";

import * as PokemonActions from "../../store/actions/pokemon"

const Home = ({pokemons, setSelectedPokemon}) => {
    const [search, setSearch] = useState("")
    const [pokemonsFiltered, setPokemonsFiltered] = useState([])
    useEffect(() => {
        const SearchPokemon = document.getElementById("SearchPokemon")
        const SearchBar = document.getElementById("SearchBar")
        SearchBar.style.width = SearchPokemon.getBoundingClientRect().width+"px"
    })
    useEffect(() => {
        if(search !== ""){
            setPokemonsFiltered(pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(search)))
        }else{
            setPokemonsFiltered([])
        }
    }, [search])
    return (
        <>
            <h1>HOME</h1>
            <input type="text" id="SearchPokemon" onChange={(e) => setSearch(String(e.target.value))} placeholder="Digite o nome do Pokemon!"/>
            <div id="SearchBar">
                {pokemonsFiltered.map(pokemonFiltered => (
                    <Link key={pokemonFiltered.id}  to="/painel" onClick={() => setSelectedPokemon(pokemonFiltered)}>
                        {pokemonFiltered.name}
                    </Link>
                ))}
            </div>
            <button>Pesquisar</button> {/*FALTA ESSA FUNÇÃO*/}
            <Link to="/gallery">Ver Todos</Link>
        </>
    )
}

const mapStateToProps = state => (
    {pokemons: state.pokemon.pokemons}
)

const mapDispatchToProps = dispatch => bindActionCreators(PokemonActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)