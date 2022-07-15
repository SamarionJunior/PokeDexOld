import React from "react";
import { connect } from "react-redux";

const Painel = ({itens}) => (
    <div>
        <h1>Slide</h1>
        {itens?.map(item => (
            <p key={item?.id}>{item?.name}</p>
        ))}
    </div>
)

const mapStateToProps = state => (
    {itens: state.slide.itens}
)

export default connect(mapStateToProps)(Painel)