import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Home = ({pokemons}) => {
    const [search, setSearch] = useState("")
    const [pokemonsFiltered, setPokemonsFiltered] = useState([])
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
                <input onChange={(e) => setSearch(String(e.target.value))} type="text" placeholder="Digite o nome do Pokemon!"/>
                <input type="submit" placeholder="Pesquisar"/>
            </div>
            <div className="SearchBar">
                {console.log(pokemonsFiltered)}
                {pokemonsFiltered.map(pokemonFiltered => (
                    <p key={pokemonFiltered.id}>
                        {pokemonFiltered.name}
                    </p>
                ))}
            </div>
            <Link to="/gallery">Ver Todos</Link>
        </div>
    )
}

const mapStateToProps = state => (
    {pokemons: state.pokemon.pokemons}
)

export default connect(mapStateToProps)(Home)