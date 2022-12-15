import "./style.css"

import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux"
import { Link } from "react-router-dom";

import * as PokemonActions from "./../../../../store/actions/pokemon"

const Card = ({item, setSelectedPokemon}) => (
    <div className="Card BoxShadow">
        {item.sprites.front_default ? 
            <img className="Image BoxShadow" src={item.sprites.front_default}/> : 
            <img className="Image BoxShadow" src={item.sprites.other["official-artwork"].front_default}/>
        }
        <span className="Title TextShadow">{item.name}</span>
        {item.types.map(array => (
            <div className="Types BoxShadow" key={array.type.name}>
                {array.type.name}
            </div>
        ))}
        <Link className="PainelLink BoxShadow" to="/painel" onClick={() => setSelectedPokemon(item)}>Selecionar</Link>
    </div>
)

const mapDispatchToProps = dispatch => bindActionCreators(PokemonActions, dispatch)

export default connect(null, mapDispatchToProps)(Card)