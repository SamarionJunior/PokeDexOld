import "./style.css"

import { limit } from "./api/constants";

import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { connect, shallowEqual } from "react-redux";
import { bindActionCreators } from "redux";

import * as PokemonActions from "./store/actions/pokemon"

import { site } from "./api/constants";

import { initPokemons } from "./model/Pokemon"

import Painel from './pages/Painel'
import Gallery from './pages/Gallery';
import Home from "./pages/Home";
import { useState } from "react";

const App = ({setPokemons, pokemons}) => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const PokemonsPromise = initPokemons(site)
    PokemonsPromise.then(PokemonsResolve => 
      setPokemons(PokemonsResolve)
    ).then((pokemons) => 
      pokemons.length !== 0 ? setShow(true) : setShow(false)
      // pokemons.length === limit ? setShow(true) : setShow(false)
    )
  }, [])
  return (
    <div className="App">
      {show ? 
        <Routes>
          <Route path="painel" element={<Painel />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="/" element={<Home />} />
        </Routes>
      : 
        <div>Loading...</div>
      }
    </div>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators(PokemonActions, dispatch)

export default connect(null, mapDispatchToProps)(App)