import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";

import * as PokemonActions from "../../store/actions/pokemon"

const Home = ({pokemons, setSelectedPokemon}) => {
    const [search, setSearch] = useState("")
    const [pokemonsFiltered, setPokemonsFiltered] = useState([])
    // useEffect(() => {
        // const SearchPokemon = document.getElementById("SearchPokemon")
        // const SearchBar = document.getElementById("SearchBar")
        // SearchBar.style.width = SearchPokemon.getBoundingClientRect().width+"px"
    // })
    useEffect(() => {
        if(search !== ""){
            setPokemonsFiltered(pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(search)))
        }else{
            setPokemonsFiltered([])
        }
    }, [search])
    return (
        <Container>
          <Row>
            <Col>
                <h1>HOME</h1>
            </Col>
          </Row>
          <Row>
            <Col>
                <Form.Control type="text" id="SearchPokemon" onChange={(e) => setSearch(String(e.target.value))} placeholder="Digite o nome do Pokemon!"/>
                <ListGroup variant="flush">
                    {pokemonsFiltered.map(pokemonFiltered => (
                        <ListGroup.Item key={pokemonFiltered.id}>
                            <Link  to="/painel" onClick={() => setSelectedPokemon(pokemonFiltered)}>
                                {pokemonFiltered.name}
                            </Link>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Col>
            <Col>
                <Button variant="primary">Pesquisar</Button>
            </Col>
          </Row>
          <Row>
            <Col>
                <Link to="/gallery">Ver Todos</Link>
            </Col>
          </Row>
        </Container>
    )
}

const mapStateToProps = state => (
    {pokemons: state.pokemon.pokemons}
)

const mapDispatchToProps = dispatch => bindActionCreators(PokemonActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)