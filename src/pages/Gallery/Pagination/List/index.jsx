import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";

import * as PokemonActions from "../../../../store/actions/pokemon"

const List = ({currentItens, setSelectedPokemon}) => (
    <div>
        {currentItens.map(currentItem => (
            <div key={currentItem.id}>
                {currentItem.name}
                <Link to="/painel" onClick={() => setSelectedPokemon(currentItem)}>Selecionar</Link>
            </div>)
        )}
    </div>
)

const mapStateToProps = state => ({currentItens: state.pagination.currentItens})

const mapDispatchToProps = dispatch => bindActionCreators(PokemonActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(List)




