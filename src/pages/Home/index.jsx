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
        <div className="grid grid-cols-12 gap-4 justify-center">
            <h1 className="col-span-12 text-center">Home</h1>
            <div className="col-span-12">
                <input className="m-[1em]" id="SearchPokemon" onChange={(e) => setSearch(String(e.target.value))} type="text" placeholder="Digite o nome do Pokemon!"/>
                <input type="submit" placeholder="Pesquisar"/>
            </div>
            <div id="SearchBar" className="col-span-12 overflow-auto">
                {pokemonsFiltered.map(pokemonFiltered => (
                    <Link key={pokemonFiltered.id} to="/painel" onClick={() => setSelectedPokemon(pokemonFiltered)}>
                        {pokemonFiltered.name}
                        <br/>
                    </Link>
                ))}
            </div>
            <Link to="/gallery" className="col-span-12">Ver Todos</Link>
        </div>
    )
}

const mapStateToProps = state => (
    {pokemons: state.pokemon.pokemons}
)

const mapDispatchToProps = dispatch => bindActionCreators(PokemonActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)