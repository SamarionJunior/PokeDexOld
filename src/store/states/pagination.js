const INITIAL_STATE = {
    itensPerPage: 1,
    currentPage: 0,
    pages: 0,
    startIndex: 0,
    endIndex: 0,
    currentItens: []
}

export default INITIAL_STATE


// const [itensPerPage,setItensPerPage] = useState(limit)
// const [currentPage, setCurrentPage] = useState(0)

// const pages = Math.ceil(pokemons.length / itensPerPage)
// const startIndex = currentPage * itensPerPage;
// const endIndex = startIndex + itensPerPage
// const currentItens = pokemons.slice(startIndex, endIndex)

        