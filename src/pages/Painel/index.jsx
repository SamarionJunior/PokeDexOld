import "../../style.css"
import "./style.css"

import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";

import { useState } from "react";

import * as SlideActions from "../../store/actions/slide"
// import * as PokemonActions from "../../store/actions/pokemon"

// import Slide from "./Slide";

const Painel = ({pokemonSelected, pokemons, setItens}) => {

    const [show, setShow] = useState(false)

    const [id, setId] = useState(0)

    const [name, setName] = useState("")

    const [imagem, setImagem] = useState("")
    const [types, setTypes] = useState([])

    const [abilities, setAbilities] = useState()
    const [moves, setMoves] = useState()
    const [stats, setStats] = useState()

    const [baseExperience, setBaseExperience] = useState()
    const [height, setHeight] = useState()
    const [weight, setWeight] = useState()

    useEffect(() => {
        if(Object.keys(pokemonSelected).length === 0){
            pokemonSelected = pokemons[0]
        }
    }, [])

    useEffect(() => {
        if(Object.keys(pokemonSelected).length !== 0){
            setShow(true)
            setName(pokemonSelected.name)
            setImagem(pokemonSelected.sprites.front_default ? pokemonSelected.sprites.front_default : pokemonSelected.sprites.other["official-artwork"].front_default)
            setTypes(pokemonSelected.types)
            setId(pokemonSelected.id)

            setBaseExperience(pokemonSelected.base_experience)
            setHeight(pokemonSelected.height)
            setWeight(pokemonSelected.weight)

            setAbilities(pokemonSelected.abilities)
            setMoves(pokemonSelected.moves)
            setStats(pokemonSelected.stats)

        }
    }, [pokemonSelected])

    const options = pokemonSelected?.types?.map(type => type.type.name)
    
    useEffect(() => {
        setItens(pokemons, options, pokemonSelected)
    }, [pokemons, options, pokemonSelected, setItens])
    
    return (
        <div className="Painel">
            {show ?
                <div className="PainelContent BoxShadow">
                    <h1 className="PainelTitle">Painel</h1>
                    <div className="PainelCard BoxShadow">
                        <div className="PainelSlideImgem BoxShadow">
                            <div className="PainelSlideImgemFullDiv BoxShadow">
                                <img className="PainelImagemfull" src={imagem} alt="pokemonSelected.sprites.front_default"/>
                            </div>
                            <div className="PainelSlideDiv">
                                <img className="PainelImagem BoxShadow" src={imagem} alt="pokemonSelected.sprites.front_default"/>
                                <img className="PainelImagem BoxShadow" src={imagem} alt="pokemonSelected.sprites.front_default"/>
                                <img className="PainelImagem BoxShadow" src={imagem} alt="pokemonSelected.sprites.front_default"/>
                            </div>
                        </div>
                        <div className="Infor BoxShadow">
                            <h3>{name}</h3>
                            <div className="information">
                                {`Base Experience: ${baseExperience}`}
                            </div>
                            <div className="information">
                                {`Height: ${height}`}
                            </div>
                            <div className="information">
                                {`Weight: ${weight}`}
                            </div>
                            {/* <div className="information">
                                {``}
                            </div> */}
                            <div className="InformationTypes">
                                {types.map(information => (
                                    <div key={`${id} - ${information.type.name}`}>
                                        {information.type.name}
                                    </div>
                                ))}
                            </div>
                            <div className="InformationAbilities">
                                {abilities.map(information => (
                                    <div key={`${id} - ${information.ability.name}`}>
                                        <div>
                                            {information.is_hidden.toString()}
                                        </div>
                                        <div>
                                            {information.slot}
                                        </div>
                                        <div>
                                            {information.ability.name}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="InformationMoves">
                                {moves.map(information => (
                                    <div key={`${id} - ${information.move.name}`}>
                                        {information.move.name}
                                    </div>
                                ))}
                            </div>
                            <div className="InformationStats">
                                {stats.map(information => (
                                    <div key={`${id} - ${information.stat.name}`}>
                                    <div>
                                        {information.stat.name}
                                    </div>
                                    <div>
                                        {information.base_stat}
                                    </div>
                                    <div>
                                        {information.effort}
                                    </div>
                                    </div>
                                ))}
                            </div>
                            {/* {types.map(array => (
                                <div key={`${id} - ${array.type.name}`}>
                                    {array.type.name}
                                </div>
                            ))} */}
                        </div>
                    </div>
                    {/* <Slide></Slide> */}
                    <Link className="PainelGalleryLink BoxShadow" to="/gallery">Ver Todos</Link>
                </div> :
                <div>Selecione um Pokemon</div>
            }
        </div>
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

{/* <h3>{pokemonSelected.name}</h3>
{pokemonSelected.sprites.front_default ? <img src={pokemonSelected.sprites.front_default}/> : <img src={pokemonSelected.sprites.other["official-artwork"].front_default} alt="pokemonSelected.sprites.front_default"/>}
{pokemonSelected.types.map(array => (
    <div key={`${pokemonSelected.id} - ${array.type.name}`}>
        {array.type.name}
    </div>
))} */}