import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Pagination from "./Pagination";
import Filter from "./Filter";

const Gallery = () => (
    <div>
        <h1>Gallery</h1>
        <Filter></Filter>
        <Pagination></Pagination>
        <Link to="/">Inicio</Link>
    </div>
)

export default connect(null, null)(Gallery)