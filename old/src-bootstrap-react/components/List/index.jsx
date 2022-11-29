import Col from 'react-bootstrap/Col';

import React from "react";
import { connect } from "react-redux";

import CardPokemon from "../CardPokemon";

const List = ({itens}) => (
    <>
        {itens.map(item => (
            <Col lg={2} key={item.id}>
                <CardPokemon item={item}></CardPokemon>
            </Col>
        ))}
    </>
)

const mapStateToProps = state => ({
    itens: state.list.itens,
})

export default connect(mapStateToProps, null)(List)
