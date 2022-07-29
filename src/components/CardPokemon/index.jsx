import Card from 'react-bootstrap/Card';

import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";

import * as PokemonActions from "../../store/actions/pokemon"

const CardPokemon = ({item, setSelectedPokemon}) => (
    <div>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.sprites.front_default} />
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                {/* <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text> */}
                <Link to="/painel" onClick={() => setSelectedPokemon(item)}>Selecionar</Link>
            </Card.Body>
        </Card>
    </div>
)

const mapDispatchToProps = dispatch => bindActionCreators(PokemonActions, dispatch)

export default connect(null, mapDispatchToProps)(CardPokemon)
