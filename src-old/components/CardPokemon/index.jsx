import ListGroup from 'react-bootstrap/ListGroup';

import Card from 'react-bootstrap/Card';

import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";

import * as PokemonActions from "../../store/actions/pokemon"

const CardPokemon = ({style, item, setSelectedPokemon}) => (
    <>
        <Card style={style}>
            <Card.Img variant="top" src={item.sprites.front_default} />
            <Card.Body>
                <Card.Title style={{"fontSize": "1em"}}>{item.name}</Card.Title>
                <ListGroup numbered /*horizontal*/>
                    {item.types.map(array => (
                        <ListGroup.Item key={array.type.name} action>
                            {array.type.name}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
                <Link to="/painel" onClick={() => setSelectedPokemon(item)}>Selecionar</Link>
            </Card.Body>
        </Card>
    </>
)

const mapDispatchToProps = dispatch => bindActionCreators(PokemonActions, dispatch)

export default connect(null, mapDispatchToProps)(CardPokemon)
