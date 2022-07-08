import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";

import * as PokemonActions from "../../../../store/actions/pokemon"
import * as FilterActions from "../../../../store/actions/filter"

const List = ({currentItens, search, currentItensFiltered, setCurrentItensFiltered, setSelectedPokemon}) => {
    
    useEffect(() => {setCurrentItensFiltered(search, currentItens)}, [search, currentItens])

    return (
        <div>
            {currentItensFiltered.map(currentItemFiltered => (
                <div key={currentItemFiltered.id}>
                    {currentItemFiltered.name}
                    <Link to="/painel" onClick={() => setSelectedPokemon(currentItemFiltered)}>Selecionar</Link>
                </div>)
            )}
        </div>
    )
}

const mapStateToProps = state => ({
    currentItens: state.pagination.currentItens,
    search: state.filter.search,
    currentItensFiltered: state.filter.currentItensFiltered,
})

const mapDispatchToProps = dispatch => bindActionCreators(Object.assign(PokemonActions, FilterActions), dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(List)
