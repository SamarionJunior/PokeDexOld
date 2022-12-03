import "./style.css"

import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";

import * as PokemonActions from "../../store/actions/pokemon"

const CardPokemon = ({style, item, setSelectedPokemon}) => (
    <div className="CardPokemon">
        {item.sprites.front_default ? <img src={item.sprites.front_default}/> : <img src={item.sprites.other["official-artwork"].front_default}/>}
        <h1 style={{"fontSize": "1em"}}>{item.name}</h1>
        {item.types.map(array => (
            <div key={array.type.name} action>
                {array.type.name}
            </div>
        ))}
        <Link to="/painel" onClick={() => setSelectedPokemon(item)}>Selecionar</Link>
    </div>
)

const mapDispatchToProps = dispatch => bindActionCreators(PokemonActions, dispatch)

export default connect(null, mapDispatchToProps)(CardPokemon)
