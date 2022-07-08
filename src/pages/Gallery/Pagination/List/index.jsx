import React from "react";
import { useMemo } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";

import * as PokemonActions from "../../../../store/actions/pokemon"

const List = ({currentItens, search, setSelectedPokemon}) => {
    const currentItensFiltered = useMemo(() => {
        if(search){
            const lowerSearch = search.toLowerCase()
            return currentItens.filter((currentItem) => 
                currentItem.name.toLowerCase().includes(lowerSearch)
            )
        }
        return currentItens
    }, [search, currentItens])
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
    search: state.search.search,
})

const mapDispatchToProps = dispatch => bindActionCreators(PokemonActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(List)




