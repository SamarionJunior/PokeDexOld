import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux"

import * as PokemonActions from "./../../../store/actions/pokemon"

const Painel = ({itens, setSelectedPokemon}) => (
    
    <div>
        <h1>Slide</h1>
        {itens?.map(item => (
            <div key={item?.id}>
                <p>{item?.name}</p>
                <button onClick={() => setSelectedPokemon(item)}>Ver Mais</button>
            </div>
        ))}
    </div>
)

const mapStateToProps = state => (
    {itens: state.slide.itens}
)

const mapDispatchToProps = dispatch => bindActionCreators(PokemonActions, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Painel)