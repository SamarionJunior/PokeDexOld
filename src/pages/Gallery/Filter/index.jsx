import "./style.css"

import React from "react";
import { connect } from "react-redux";

import Search from "./Search";
import Option from "./Option";
import Order from "./Order";

const Filter = () => (
    <div className="Filter">
        <Search></Search>
        <Option></Option>
        <Order></Order>
    </div>
)

export default connect(null, null)(Filter)