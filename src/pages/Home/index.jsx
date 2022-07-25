import tw from 'tailwind-styled-components'

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";

import * as PokemonActions from "../../store/actions/pokemon"

const Grid = tw.div`
    grid grid-cols-12 gap-4 bg-[#ff0000] font-[Roboto]
`
const Title = tw.h1`
    col-span-12 text-center text-5xl
    p-4 text-white
`

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
        <Grid>
            <Title>HOME</Title>
            <div className="col-span-12 grid grid-cols-12 gap-0 h-screen">
                <input
                    className="
                        col-start-4 col-span-4
                        p-[1em] outline-0 bg-white
                    "
                    id="SearchPokemon" onChange={(e) => setSearch(String(e.target.value))} type="text" placeholder="Digite o nome do Pokemon!"/>
                <button
                    className="
                        col-span-2
                        p-[1em] outline-0 bg-white
                    "
                >
                        Pesquisar
                </button>
                <div id="SearchBar" className="col-span-12 overflow-auto">
                    {pokemonsFiltered.map(pokemonFiltered => (
                        <Link key={pokemonFiltered.id} to="/painel" onClick={() => setSelectedPokemon(pokemonFiltered)}>
                            {pokemonFiltered.name}
                            <br/>
                        </Link>
                    ))}
                </div>
            </div>
            <Link to="/gallery"
                className="
                    col-start-6 col-span-2
                    bg-white p-4 text-center
                "
            >
                Ver Todos
            </Link>
        </Grid>
    )
}

const mapStateToProps = state => (
    {pokemons: state.pokemon.pokemons}
)

const mapDispatchToProps = dispatch => bindActionCreators(PokemonActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)