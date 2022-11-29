

import React from "react";
import { connect } from "react-redux";

import CardPokemon from "../CardPokemon";

const List = ({itens}) => (
    <>
        {itens.map(item => (
            <CardPokemon item={item}></CardPokemon>
        ))}
    </>
)

const mapStateToProps = state => ({
    itens: state.list.itens,
})

export default connect(mapStateToProps, null)(List)
