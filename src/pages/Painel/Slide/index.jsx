import "./style.css"

import React from "react";
import { connect } from "react-redux";

import Card from './Card';

const slideLeft = () => {
    const Scroll = document.getElementById("Scroll")
    var style = Scroll.currentStyle || window.getComputedStyle(Scroll);
    Scroll.scrollLeft = Scroll.scrollLeft - 200 - parseFloat(style.marginLeft.slice(0, -2)) * 2
}

const slideRight = () => {
    const Scroll = document.getElementById("Scroll")
    var style = Scroll.currentStyle || window.getComputedStyle(Scroll);
    console.log(style.marginLeft)
    Scroll.scrollLeft = Scroll.scrollLeft + 200 + parseFloat(style.marginLeft.slice(0, -2)) * 2
}

const Slide = ({itens, title}) => (
    <div className="Slide BoxShadow">
        <h1>{title}</h1>
        <div className="Slider">
            <button onClick={slideLeft} className="SliderButton Prev">&lt;</button>
            <div id="Scroll" className="SliderScroll">
                {itens?.map(item => (
                    <Card key={item.id} item={item}></Card>
                ))}
            </div>
            <button onClick={slideRight} className="SliderButton Next">&gt;</button>
        </div>
    </div>
)

const mapStateToProps = state => (
    {itens: state.slide.itens}
)
export default connect(mapStateToProps, null)(Slide)

// window.scroll({top: 400, behavior: "smooth"})

/* <div className="Slide">
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
</div> */
