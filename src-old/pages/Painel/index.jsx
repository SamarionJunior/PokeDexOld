import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as SlideActions from "../../store/actions/slide"
import Slide from "./Slide";

const Painel = ({pokemonSelected, pokemons, setItens}) => {

    if(pokemonSelected){
        pokemonSelected = pokemons[0]
    }

    const options = pokemonSelected?.types?.map(type => type.type.name)
    
    useEffect(() => {
        setItens(pokemons, options, pokemonSelected)
    }, [pokemons, options, pokemonSelected, setItens])
    
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Painel</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3>{pokemonSelected?.name}</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <img src={pokemonSelected?.sprites?.front_default} alt="pokemonSelected.sprites.front_default" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <ListGroup numbered /*horizontal*/>
                        {pokemonSelected?.types?.map(array => (
                            <ListGroup.Item action key={`${pokemonSelected?.id} - ${array.type.name}`}>
                                {array.type.name}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
            <Slide></Slide>
            <Row>
                <Col>
                    <Link to="/gallery">Ver Todos</Link>
                </Col>
            </Row>
        </Container>
    )
}

const mapStateToProps = state => ({
    pokemonSelected: state.pokemon.pokemonSelected,
    pokemons: state.pokemon.pokemons
})

const mapDispatchToProps = dispatch => (
    bindActionCreators(SlideActions, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Painel)