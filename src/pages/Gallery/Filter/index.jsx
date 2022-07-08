import React from "react";
import { connect } from "react-redux";

import Search from "./Search";
import Option from "./Option";

const Filter = () => (
    <div>
        <Search></Search>
        <Option></Option>
    </div>
)

export default connect(null, null)(Filter)