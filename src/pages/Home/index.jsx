import "./style.css"

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
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
        <div>
            <h1>Home</h1>
            <div>
                <input id="SearchPokemon" onChange={(e) => setSearch(String(e.target.value))} type="text" placeholder="Digite o nome do Pokemon!"/>
                <input type="submit" placeholder="Pesquisar"/>
            </div>
            <div id="SearchBar" className="SearchBar">
                {pokemonsFiltered.map(pokemonFiltered => (
                    <Link 
                        key={pokemonFiltered.id} 
                        to="/painel"
                        onClick={() => setSelectedPokemon(pokemonFiltered)}
                    >
                        {pokemonFiltered.name}
                        <br/>
                    </Link>
                ))}
            </div>
            <Link to="/gallery">Ver Todos</Link>
        </div>
    )
}

const mapStateToProps = state => (
    {pokemons: state.pokemon.pokemons}
)

const mapDispatchToProps = dispatch => bindActionCreators(PokemonActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)