import "./style.css";

import React from "react";
import { connect } from "react-redux";

import CardPokemon from "../CardPokemon";

const List = ({itens}) => (
    <div className="List">
        {itens.map(item => (
            <CardPokemon key={item.id} item={item}></CardPokemon>
        ))}
    </div>
)

const mapStateToProps = state => ({
    itens: state.list.itens,
})

export default connect(mapStateToProps, null)(List)
