import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as PaginationActions from "../../../store/actions/pagination";

const Pagination = ({
    pokemons, itensPerPage, currentPage, pages, startIndex, endIndex, currentItens,
    setItensPerPage, setCurrentPage, setPages, setStartIndex, setEndIndex, setCurrentItens
}) => {

    const [itensPerPage, setItensPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(0)

    const pages = Math.ceil(pokemons.length / itensPerPage)
    const startIndex = currentPage * itensPerPage;
    const endIndex = startIndex + itensPerPage
    const currentItens = pokemons.slice(startIndex, endIndex)

    return (
        <div>
            <dir>
                <select value={itensPerPage} onChange={(e)=>setItensPerPage(Number(e.target.value))}>
                    {[5].map(sequence => <option value={sequence} key={sequence}>{sequence}</option>)}
                </select>
            </dir>

            <div>
                {Array.from(Array(pages), (item, index) => (<button key={index} value={index} onClickCapture={(e)=> SetCurrentPage(Number(e.target.value))}>{index + 1}</button>))}
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
    bindActionCreators(PaginationActions, Pagination)
)

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)




