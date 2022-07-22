import "./style.css"

import React from "react";
import { connect } from "react-redux";

import Card from "./Card";

const slideLeft = () => {
    const slider = document.getElementById("Scroll")
    slider.scrollLeft = slider.scrollLeft - 100
}

const slideRight = () => {
    const slider = document.getElementById("Scroll")
    slider.scrollLeft = slider.scrollLeft + 100
}

const Slide = ({itens}) => (
    
    <div className="Slide">
        <h1>Slide</h1>
        <div id="Slider" className="Slider">
            <button className="Button" onClick={slideLeft}>&lt;</button>
            <div id="Scroll" className="Scroll">
                {itens?.map(item => (
                    <Card key={item.id} item={item}></Card>
                ))}
            </div>
            <button className="Button" onClick={slideRight}>&gt;</button>
        </div>
    </div>
)

const mapStateToProps = state => (
    {itens: state.slide.itens}
)
export default connect(mapStateToProps, null)(Slide)

// window.scroll({top: 400, behavior: "smooth"})
