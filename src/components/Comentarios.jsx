
      {/* {console.log(urls)} */}
      {/* {console.log(pokemons)} */}
      {/* {console.log(pokemons?.results[0]?.url) */}

    // urls.forEach(chave => {
    //   api
    //     .get(urls[chave])
    //     .then((response) => {
    //       setPokemons(pokemons => [...pokemons, response.data])
    //     })
    //     .catch((err) => {
    //       console.error("ops! ocorreu um erro" + err);
    //     });
    // })

// useEffect(() => {
  //   api
  //     .get(pokemonsList)
  //     .then((response) => {
  //       let auxURL = response.data.results
  //       // console.log(auxURL.length)
  //       setUrls(
  //         auxURL.map(url =>{
  //           return url.url
  //         })
  //       )
  //     })
  //     .catch((err) => {
  //       console.error("ops! ocorreu um erro" + err);
  //     });
  // }, [pokemonsList]);

  // useEffect(() => {
  //   urls.forEach(chave => {
  //     api
  //       .get(urls[chave])
  //       .then((response) => {
  //         setPokemons(pokemons => [...pokemons, response.data])
  //       })
  //       .catch((err) => {
  //         console.error("ops! ocorreu um erro" + err);
  //       });
  //   })
  // }, [urls])

// {Object.keys(pokemons.sprites).map(chave => {
//   const url = pokemons.sprites[chave]
//   if(typeof(url) !== 'object' && typeof(url) ==='string'){
//     return <img key={chave} src={url} alt={chave}/>
//   }
//   return 
// })}

 // const [abilities, setAbilities] = useState({});
  // const [baseExperience, setBaseExperience] = useState({});
  // const [forms, setForms] = useState({});
  // const [gameIndices, setGameIndices] = useState({});
  // const [height, setHeight] = useState({});
  // const [heldItems, setHeldItems] = useState({});
  // const [id, setId] = useState({});
  // const [isDefault, setIsDefault] = useState({});
  // const [locationAreaEncounters, setLocationAreaEncounters] = useState({});
  // const [moves, setMoves] = useState({});
  // const [name, setName] = useState({});
  // const [order, setOrder] = useState({});
  // const [pastTypes, setPastTypes] = useState({});
  // const [species, setSpecies] = useState({});
  // const [sprites, setSprites] = useState({});
  // const [stats, setStats] = useState({});
  // const [types, setTypes] = useState({});
  // const [weight, setWeight] = useState({});


  // abilities
  // base_experience
  // forms
  // game_indices
  // height
  // held_items
  // id
  // is_default
  // location_area_encounters
  // moves
  // name
  // order
  // past_types
  // species
  // sprites
  // stats
  // types
  // weight

// function ListarObejtos(objeto){
//   if(objeto){
//     return (
//       <ul>
//         {Object.keys(objeto).map((chave) => {
//           let complemento = null
//           if(typeof(objeto[chave]) === 'object'){
//             complemento = <ul key={chave}>{ListarObejtos(objeto[chave])}</ul>
//           }else if(typeof(objeto[chave]) === 'number' || typeof(objeto[chave]) === 'string'){
//             console.log(chave + " - " + objeto[chave])
//             complemento = <li key={chave}>{chave + " - " + objeto[chave]}</li>
//           }
//           return complemento
//         })}
//       </ul>
//     )
//   }
//   return
// }


/*<li>
  {
    `${item} ${typeof(objeto[item]) === 'object' ? ListarObejtos(objeto[item]) : ''}`
  }
</li>*/

// const obj = {
  //   A0: {
  //     A1:{
  //       N: 1,
  //       L: "A"
  //     },
  //     A2:{
  //       N: 2,
  //       L: "B"
  //     },
  //     A3:{
  //       N: 3,
  //       L: "C"
  //     }
  //   },
  //   B0: {
  //     B1:{
  //       N: 4,
  //       L: "D"
  //     },
  //     B2:{
  //       N: 5,
  //       L: "E"
  //     },
  //     B3:{
  //       N: 6,
  //       L: "F"
  //     }
  //   },
  //   C0: {
  //     C1:{
  //       N: 7,
  //       L: "G"
  //     },
  //     C2:{
  //       N: 8,
  //       L: "H"
  //     },
  //     C3:{
  //       N: 9,
  //       L: "I"
  //     }
  //   },
  // }