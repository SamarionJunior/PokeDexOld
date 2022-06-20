import './styles/App.css';

import React, { useEffect } from "react";
import {getData, getDatas} from "./api/api";
import {limit, site} from "./api/constants";
import Pokemons from './model/pokemons'

import PaginationComponet from './components/PaginationComponent';

import Card from './components/Card';
import { useState } from 'react';

export default function App() {

  const {pokemons, setPokemons,extractIndex, mountURLs, order} = Pokemons()

  const [itensPerPage,setItensPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(0)

  const pages = Math.ceil(pokemons.length / itensPerPage)
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage
  const currentItens = pokemons.slice(startIndex, endIndex)

  useEffect(() => {
    async function init(){
      const data = await getData(site)
      const index = await extractIndex(data)
      const urls = await mountURLs(index)
      const pokemonsOutOfOrder = await getDatas(urls)
      const pokemonsInOrder = await order(pokemonsOutOfOrder)
      setPokemons(pokemonsInOrder)
    }
    init()
  }, [site])

    useEffect(()=>{
      setCurrentPage(0)
    }, [itensPerPage])

  return (
    <div className="App">
      <dir>
        <select value={itensPerPage} onChange={(e)=>setItensPerPage(Number(e.target.value))}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
      </dir>

      <PaginationComponet setCurrentPage={setCurrentPage} pages={pages}></PaginationComponet>

      {/* {pokemons && pokemons.length === limit?console.log(pokemons.length,pokemons):null} */}
      {pokemons && pokemons.length === limit? 
        currentItens?.map(pokemon => (
          <Card 
            id={pokemon.id}
            key={pokemon.name}
            url={pokemon?.sprites?.front_default}
            nome={pokemon?.name}
            tipo={pokemon?.types?.[0].type?.name}
            ataque={pokemon?.abilities?.[0].ability?.name}
          />
        )) :null}
    </div>
  );
}