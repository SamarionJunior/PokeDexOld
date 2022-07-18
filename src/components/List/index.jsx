import React from "react";
import { connect } from "react-redux";

import Card from "../Card";

const List = ({itens}) => (
    <div>
        {itens.map(item => (<Card key={item.id} item={item}></Card>))}
    </div>
)

const mapStateToProps = state => ({
    itens: state.list.itens,
})

export default connect(mapStateToProps, null)(List)
