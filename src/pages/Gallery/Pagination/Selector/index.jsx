import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as PaginationActions from "../../../../store/actions/pagination";

const Selector = ({pokemons, itensPerPage, setItensPerPage}) => {

    useEffect(() => {
        setItensPerPage(pokemons, itensPerPage)
    }, [])
    
    return (
        <div>
            <div>
                <select onChange={(e) => setItensPerPage(pokemons, Number(+e.target.value))}>
                    <option value={1}>{1}</option>
                    <option value={2}>{2}</option>
                    <option value={3}>{3}</option>
                    <option value={4}>{4}</option>
                    <option value={5}>{5}</option>
                    <option value={6}>{6}</option>
                    <option value={7}>{7}</option>
                    <option value={8}>{8}</option>
                    <option value={9}>{9}</option>
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




