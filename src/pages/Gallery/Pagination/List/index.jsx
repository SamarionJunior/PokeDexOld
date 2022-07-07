import React from "react";
import { connect } from "react-redux";

const List = ({currentItens}) => (
    <div>
        {currentItens.map(currentItem => (
            <div key={currentItem.id}>
                {currentItem.name}
            </div>)
        )}
    </div>
)

const mapStateToProps = state => ({currentItens: state.pagination.currentItens})

export default connect(mapStateToProps)(List)




