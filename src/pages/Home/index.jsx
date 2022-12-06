import "../../style.css"
import "./style.css"

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";

import * as PokemonActions from "../../store/actions/pokemon"

const Home = ({pokemons, setSelectedPokemon}) => {
    const [search, setSearch] = useState("")
    const [pokemonsFiltered, setPokemonsFiltered] = useState([])

    const Blur = () => {
        const DataList = document.getElementById("DataList");
        DataList.style.display = "none"
    }

    const Focus = () => {
        const DataList = document.getElementById("DataList");
        DataList.style.display = "flex"
    }

    useEffect(() => {
        const SearchInput = document.getElementById("SearchInput")
        const DataList = document.getElementById("DataList")

        if(pokemonsFiltered.length !== 0){
            DataList.style.display = "flex"
        }else{
            DataList.style.display = "none"
        }

        DataList.style.width = SearchInput.getBoundingClientRect().width + "px"
    })
    useEffect(() => {
        if(search !== ""){
            setPokemonsFiltered(pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(search)))
        }else{
            setPokemonsFiltered([])
        }
    }, [search])
    return (
        <div id="Home" className="Home">
            <div className="Content">
                <h1 id="Title" className="Title TextShadow">POKEDEX</h1>
                <div id="Searchbar" className="Searchbar BoxShadow">
                    <dir id="SearchSuggestions" className="SearchSuggestions">
                        <input  onBlur={Blur} onFocus={Focus} autoComplete="off" id="SearchInput" className="SearchInput" type="text" onChange={(e) => setSearch(String(e.target.value))} placeholder="Digite o nome do Pokemon!"/>
                        <div id="DataList" className="DataList">
                            {pokemonsFiltered.map(pokemonFiltered => (
                                <Link 
                                    key={pokemonFiltered.id}
                                    className="SearchItems zebrada"
                                    to="/painel"
                                    onClick={() => setSelectedPokemon(pokemonFiltered)}>
                                    {pokemonFiltered.name} <br/>
                                </Link>
                            ))}
                        </div>
                    </dir>
                    <button id="SearchButton" className="SearchButton">Pesquisar</button> {/*FALTA ESSA FUNÇÃO*/}
                </div>
                <Link className="GalleryLink BoxShadow" to="/gallery">Ver Todos</Link>
            </div>
        </div>
    )
}

const mapStateToProps = state => (
    {pokemons: state.pokemon.pokemons}
)

const mapDispatchToProps = dispatch => bindActionCreators(PokemonActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)