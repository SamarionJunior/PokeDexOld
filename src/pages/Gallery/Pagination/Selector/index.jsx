import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as PaginationActions from "../../../../store/actions/pagination";

const Selector = ({pokemons, itensPerPage, setItensPerPage}) => {

    const sequence = [1,2,3,4,5,6,7,8,9]

    useEffect(() => {
        setItensPerPage(pokemons, itensPerPage)
    }, [])
    
    return (
        <div>
            <div>
                <select value={itensPerPage} onChange={(e) => setItensPerPage(pokemons, Number(+e.target.value))}>
                    {sequence.map(index => <option key={index} value={index}>{index}</option>)}
                </select>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    pokemons: state.pokemon.pokemons,
    itensPerPage: state.pagination.itensPerPage,
})

const mapDispatchToProps = dispatch => bindActionCreators(PaginationActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Selector)




