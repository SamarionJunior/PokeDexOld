import "./style.css"

import React from "react";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as PokemonActions from "./store/actions/pokemon"

import { site } from "./api/constants";

import {initPokemons} from "./model/Pokemon"

import Painel from './pages/Painel'
import Gallery from './pages/Gallery';
import Home from "./pages/Home";

const App = ({setPokemons}) => {
  useEffect(() => {
    const PokemonsPromise = initPokemons(site)
    PokemonsPromise.then(PokemonsResolve => setPokemons(PokemonsResolve))
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path="painel" element={<Painel />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators(PokemonActions, dispatch)

export default connect(null, mapDispatchToProps)(App)