// import React from "react";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";

// import * as PokemonActions from "../../store/actions/pokemon";

// const Gallery = ({information, setSelectedItem}) => (
//     <div>
//         <ul>
//             {information.map(pokemon => {
//                 return (
//                     <li key={pokemon.id}>
//                         {pokemon.nome}
//                         <Link to="/painel" onClick={
//                             () => setSelectedItem(pokemon)
//                         }>Ver Mais</Link>
//                     </li>)
//                 }
//             )}
//         </ul>
//         <Link to="/">Inicio</Link>
//     </div>
// )

// const mapStateToProps = state => {
//     return {information: state.pokemon.information}
// }

// const mapDispatchToProps = dispatch => (
//     bindActionCreators(PokemonActions, dispatch)
// )

// export default connect(mapStateToProps, mapDispatchToProps)(Gallery)