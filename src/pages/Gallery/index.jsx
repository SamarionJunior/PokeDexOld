import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as ListActions from "../../store/actions/list"

import Pagination from "./Pagination";
import Filter from "./Filter";
import List from "../../components/List";
import Toggle from '../../components/Toggle';

const Gallery = ({currentItens, setItens}) => {
    
    useEffect(() => {
        setItens(currentItens)
    }, [currentItens]) // eslint-disable-next-line

    return (
        <Container>
            <Row>
                <Col lg={12}>
                    <h1>Gallery</h1>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <Toggle>
                        <Filter></Filter>
                    </Toggle>
                </Col>
            </Row>
            <Row>
                <Pagination>
                    <List></List>
                </Pagination>
            </Row>
            <Row>
                <Col lg={12} className="text-center">
                    <Link to="/">Inicio</Link>
                </Col>
            </Row>
        </Container>
    )
}

const mapStateToProps = state => ({
    currentItens: state.pagination.currentItens,
})

const mapDispatchToProps = dispatch => bindActionCreators(ListActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)