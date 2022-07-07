import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as PaginationActions from "../../../../store/actions/pagination";

const Buttons = ({pages, setCurrentPage}) => (
    <div>
        {Array.from(Array(pages), (item, index) => (<button key={index} value={index} onClickCapture={(e) => setCurrentPage(Number(+e.target.value))}>
            {index + 1}
        </button>))}
    </div>
)

const mapStateToProps = state => ({pages: state.pagination.pages,})

const mapDispatchToProps = dispatch => bindActionCreators(PaginationActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Buttons)




