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

const Gallery = ({currentItens, setItens}) => {

    useEffect(() => {
        setItens(currentItens)
    }, [currentItens])

    return (
        <Container>
            <Row>
                <Col lg={12}>
                    <h1>Gallery</h1>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <Filter></Filter>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <Pagination>
                        <List></List>
                    </Pagination>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
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