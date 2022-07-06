import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as PaginationActions from "../../../store/actions/pagination";



const Pagination = ({pokemons, itensPerPage, currentPage, pages, startIndex, endIndex, currentItens, setItensPerPage, setCurrentPage, setPages, setStartIndex, setEndIndex, setCurrentItens}) => {

    async function config(){
        await setCurrentPage(0)
        await setPages(Math.ceil(pokemons.length / itensPerPage))
        await setStartIndex(currentPage * itensPerPage)
        await setEndIndex(startIndex + itensPerPage)
        await setCurrentItens(pokemons.slice(startIndex, endIndex))
    }

    useEffect(() => {
        config()
    }, [itensPerPage, currentPage])

    function Console(){
        console.clear()
        console.log(currentItens)
    }

    return (
        <div>
            <div>
                <select value={itensPerPage} onChange={(e) => {setItensPerPage(Number(+e.target.value));setCurrentPage(0)}}>
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
            <div>
                {/* {Console()} */}
                {currentItens.map(currentItem => (
                    <div key={currentItem.id}>
                        {currentItem.name}
                    </div>)
                )}
            </div>
            {currentPage}
            <div>
                {Array.from(Array(pages), (item, index) => (<button key={index} value={index} onClickCapture={(e) => setCurrentPage(Number(+e.target.value))}>
                    {index + 1}
                </button>))}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        pokemons: state.pokemon.pokemons,
        itensPerPage: state.pagination.itensPerPage,
        currentPage: state.pagination.currentPage,
        pages: state.pagination.pages,
        startIndex: state.pagination.startIndex,
        endIndex: state.pagination.endIndex,
        currentItens: state.pagination.currentItens,
    }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators(PaginationActions, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)




