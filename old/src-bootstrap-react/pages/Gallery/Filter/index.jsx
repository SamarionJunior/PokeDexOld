import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as FilterActions from "../../../store/actions/filter"

import Search from "./Search";
import Option from "./Option";
import Order from "./Order";

const Filter = ({search, options, order, pokemons, setCurrentItensFiltered}) => {

    useEffect(() => {
        setCurrentItensFiltered(search, options, order, pokemons)
    }, [search, options, order, pokemons])

    return (
        <Form>
            <Row /*className="mb-3"*/>
                <Form.Group as={Col}>
                    <Search></Search>
                </Form.Group>
                <Form.Group as={Col}>
                    <Option></Option>
                </Form.Group>
                <Form.Group as={Col}>
                    <Order></Order>
                </Form.Group>
            </Row>
        </Form>
    )
}

const mapStateToProps = state => ({
    pokemons: state.pokemon.pokemons,
    search: state.filter.search,
    options: state.filter.options,
    order: state.filter.order,
})

const mapDispatchToProps = dispatch => bindActionCreators(FilterActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Filter)