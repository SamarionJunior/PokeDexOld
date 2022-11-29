import './styles/App.css';

import React, { useEffect } from "react";
import { Routes, Route/*, Link*/ } from "react-router-dom";

import {limit, site} from "./api/constants";
import Pokemons from './model/pokemons'

import PaginationConstant from './components/pagination/PaginationConstant';

import Painel from './components/presentation/Painel'

import Home from './pages/Home';

import { useState } from 'react';

import { Provider } from "react-redux";
import store from "./store";

export default function App() {

  const {pokemons, initPokemons} = Pokemons()

  const {itensPerPage, setItensPerPage, setCurrentPage, pages, currentItens} = PaginationConstant(pokemons)

  useEffect(() => {
    initPokemons(site)
  }, [site])

  useEffect(()=>{
    setCurrentPage(0)
  }, [itensPerPage])

  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          {/* <Route path="painel" element={<Painel selectedItem={selectedItem}/>} /> */}
          <Route path="/" element={<Home itensPerPage={itensPerPage} setItensPerPage={setItensPerPage} limit={limit} setCurrentPage={setCurrentPage} pages={pages} currentItens={currentItens}/>} />
        </Routes>
      </Provider>
      {/* {pokemons && pokemons.length === limit?console.log(pokemons.length,pokemons):null} */}
    </div>
  );
}