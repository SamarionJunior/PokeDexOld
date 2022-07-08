import { combineReducers } from "redux";

import pokemon from "./pokemon";
import pagination from "./pagination";
import filter from "./filter";

export default combineReducers({
    pokemon,
    pagination,
    filter
})