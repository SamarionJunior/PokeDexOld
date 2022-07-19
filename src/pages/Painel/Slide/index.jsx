import "./style.css"

import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux"

import * as PokemonActions from "./../../../store/actions/pokemon"

const Slide = ({itens, setSelectedPokemon}) => (
    
    <div className="Slide">
        <h1>Slide</h1>
        <div className="Display">
            <button className="Button">&lt;</button>
            <div className="Scroll">
                {itens?.map(item => (
                    <div key={item?.id} className="Item">
                        <p>{item?.name}</p>
                        <button onClick={() => setSelectedPokemon(item)}>Ver Mais</button>
                    </div>
                ))}
            </div>
            <button className="Button">&gt;</button>
        </div>
    </div>
)

const mapStateToProps = state => (
    {itens: state.slide.itens}
)

const mapDispatchToProps = dispatch => bindActionCreators(PokemonActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Slide)