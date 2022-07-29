import Pagination from 'react-bootstrap/Pagination';
import Button from 'react-bootstrap/Button';

import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as PaginationActions from "../../../../store/actions/pagination";

const Buttons = ({pokemons, pages, itensPerPage, setCurrentPage}) => (
    <Pagination style={{overflow:"auto"}}>
        {Array.from(Array(pages), (item, index) => (
            <Pagination.Item /* active={number === active} */ key={index} value={index} onClickCapture={(e) => setCurrentPage(pokemons, Number(+e.target.value), itensPerPage)}>
                {index + 1}
            </Pagination.Item>
        ))}
    </Pagination>
)

const mapStateToProps = state => ({
    pokemons: state.pokemon.pokemons,
    pages: state.pagination.pages,
    itensPerPage: state.pagination.itensPerPage,
})

const mapDispatchToProps = dispatch => bindActionCreators(PaginationActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Buttons)




