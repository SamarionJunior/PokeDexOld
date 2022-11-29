import { combineReducers } from "redux";

import pokemon from "./pokemon";
import pagination from "./pagination";
import filter from "./filter";
import slide from "./slide";
import list from "./list";

export default combineReducers({
    pokemon,
    pagination,
    filter,
    slide,
    list
})