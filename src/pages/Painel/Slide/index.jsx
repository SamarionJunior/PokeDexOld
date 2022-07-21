import "./style.css"

import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux"

import * as PokemonActions from "./../../../store/actions/pokemon"

const slideLeft = () => {
    const slider = document.getElementById("Scroll")
    console.log(slider.scrollLeft)
    slider.scrollLeft = slider.scrollLeft - 100
    console.log(slider.scrollLeft)
}

const slideRight = () => {
    const slider = document.getElementById("Scroll")
    console.log(slider.scrollLeft)
    slider.scrollLeft = slider.scrollLeft + 100
    console.log(slider.scrollLeft)
}

const Slide = ({itens, setSelectedPokemon}) => (
    
    <div className="Slide">
        <h1>Slide</h1>
        <div id="Slider" className="Slider">
            <button className="Button" onClick={slideLeft}>&lt;</button>
            <div id="Scroll" className="Scroll">
                {itens?.map(item => (
                    <div key={item?.id} className="Item">
                        <p>{item?.name}</p>
                        <button onClick={() => setSelectedPokemon(item)}>Ver Mais</button>
                    </div>
                ))}
            </div>
            <button className="Button" onClick={slideRight}>&gt;</button>
        </div>
    </div>
)

const mapStateToProps = state => (
    {itens: state.slide.itens}
)

const mapDispatchToProps = dispatch => bindActionCreators(PokemonActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Slide)