import './styles/App.css';

import React, { useEffect } from "react";
import {limit, site} from "./api/constants";
import Pokemons from './model/pokemons'

import PaginationConstant from './components/pagination/PaginationConstant';
import PaginationButton from './components/pagination/PaginationButton';
import PaginationSelector from './components/pagination/PaginationSelector'

import Cards from './components/presentation/Cards';

import Painel from './components/presentation/Painel'
import { useState } from 'react';

export default function App() {

  const {pokemons, initPokemons} = Pokemons()

  const {itensPerPage, setItensPerPage, setCurrentPage, pages, currentItens} = PaginationConstant(pokemons)

  const [selectedItem, setSelectedItem] = useState()

  useEffect(() => {
    initPokemons(site)
  }, [site])

  useEffect(()=>{
    setCurrentPage(0)
  }, [itensPerPage])

  return (
    <div className="App">

        <Painel selectedItem={selectedItem}/>

        <PaginationSelector itensPerPage={itensPerPage} setItensPerPage={setItensPerPage} pageSequence={[limit]}/>

        <PaginationButton setCurrentPage={setCurrentPage} pages={pages}/>

        <Cards currentItens={currentItens} setSelectedItem={setSelectedItem}/>
      
      {/* {pokemons && pokemons.length === limit?console.log(pokemons.length,pokemons):null} */}
    </div>
  );
}