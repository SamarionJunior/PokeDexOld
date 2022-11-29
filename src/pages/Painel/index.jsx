

import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as SlideActions from "../../store/actions/slide"
import Slide from "./Slide";

const Painel = ({pokemonSelected, pokemons, setItens}) => {

    if(pokemonSelected){
        pokemonSelected = pokemons[0]
    }

    const options = pokemonSelected?.types?.map(type => type.type.name)
    
    useEffect(() => {
        setItens(pokemons, options, pokemonSelected)
    }, [pokemons, options, pokemonSelected, setItens])
    
    return (
        <>
            <h1>Painel</h1>
            <h3>{pokemonSelected?.name}</h3>
            <img src={pokemonSelected?.sprites?.front_default} alt="pokemonSelected.sprites.front_default" />
            {pokemonSelected?.types?.map(array => (
                <div key={`${pokemonSelected?.id} - ${array.type.name}`}>
                    {array.type.name}
                </div>
            ))}
            <Slide></Slide>
            <Link to="/gallery">Ver Todos</Link>
        </>
    )
}

const mapStateToProps = state => ({
    pokemonSelected: state.pokemon.pokemonSelected,
    pokemons: state.pokemon.pokemons
})

const mapDispatchToProps = dispatch => (
    bindActionCreators(SlideActions, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Painel)