import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import "./style.css"

import React from "react";
import { connect } from "react-redux";

import CardPokemon from '../../../components/CardPokemon';

const slideLeft = () => {
    const slider = document.getElementById("Scroll")
    slider.scrollLeft = slider.scrollLeft - 100
}

const slideRight = () => {
    const slider = document.getElementById("Scroll")
    slider.scrollLeft = slider.scrollLeft + 100
}

const Slide = ({itens}) => (
    <>
        <Row>
            <Col>
                <h1>Slide</h1>
            </Col>
        </Row>
        <Row>
            <Col lg={12}>
                <div style={{display: "flex"}}>
                    <Button onClick={slideLeft} style={{minWidth: "100px"}}>&lt;</Button>
                    <div id="Scroll" className="Scroll" style={{overflow: "auto", display: "flex"}}>
                        {itens?.map(item => (
                            <CardPokemon key={item.id} item={item} style={{minWidth: "200px"}}></CardPokemon>
                        ))}
                    </div>
                    <Button onClick={slideRight} style={{minWidth: "100px"}}>&gt;</Button>
                </div>
            </Col>
        </Row>
    </>
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
