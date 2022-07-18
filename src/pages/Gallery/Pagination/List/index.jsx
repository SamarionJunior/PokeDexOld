import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";

import * as PokemonActions from "../../../../store/actions/pokemon"

const List = ({itens, setSelectedPokemon}) => (
    <div>
        {itens.map(item => (
            <div key={item.id}>
                {item.name}
                <Link to="/painel" onClick={() => setSelectedPokemon(item)}>Selecionar</Link>
            </div>)
        )}
    </div>
)

const mapStateToProps = state => ({
    itens: state.list.itens,
})

const mapDispatchToProps = dispatch => bindActionCreators(PokemonActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(List)
