import React from "react";
import { connect } from "react-redux";

function Console(value){
    console.clear()
    console.log(value)
}

const List = ({currentItens}) => (
    <div>
        {/* {Console(currentItens)} */}
        {currentItens.map(currentItem => (
            <div key={currentItem.id}>
                {currentItem.name}
            </div>)
        )}
    </div>
)

const mapStateToProps = state => ({currentItens: state.pagination.currentItens})

export default connect(mapStateToProps)(List)




