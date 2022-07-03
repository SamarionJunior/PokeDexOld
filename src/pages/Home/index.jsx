import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as PokemonActions from "../../store/actions/pokemon";

const Home = ({information, setSelectedItem}) => {
    <div>
        {/* {information.map(pokemon => 
            <div key={pokemon.id}>
                <h1>{pokemon.nome}</h1>
                <Link to="/painel" onClick={
                    () => setSelectedItem(pokemon.nome)
                }>Ver Mais</Link>
            </div>
        )} */}
        {information}
        asddfad
    </div>
}

const mapStateToProps = state => (
    {information: state.pokemon.information}
)

const mapDispatchToProps = dispatch => (
    bindActionCreators(PokemonActions, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Home)