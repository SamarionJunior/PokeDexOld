import {limit} from "../../api/constants";
import { useState } from "react";

export default function PaginationConstant(pokemons){
    const [itensPerPage,setItensPerPage] = useState(limit)
    const [currentPage, setCurrentPage] = useState(0)
  

    const pages = Math.ceil(pokemons.length / itensPerPage)
    const startIndex = currentPage * itensPerPage;
    const endIndex = startIndex + itensPerPage
    const currentItens = pokemons.slice(startIndex, endIndex)

    return {
        itensPerPage,
        setItensPerPage,
        currentPage,
        setCurrentPage,
        pages,
        startIndex,
        endIndex,
        currentItens
    }
}