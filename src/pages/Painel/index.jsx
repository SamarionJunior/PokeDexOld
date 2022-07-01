import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Painel = ({itemSelected}) => {
    <div>
        <h1>{itemSelected.nome}</h1>
        <Link to="/">Voltar</Link>
    </div>
}

const mapStateToProps = state => (
    {itemSelected: state.pokemon.itemSelected}
)

export default connect(mapStateToProps)(Painel)