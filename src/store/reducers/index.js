import { combineReducers } from "redux";

import pokemon from "./pokemon";
import pagination from "./pagination";
import search from "./search";

export default combineReducers({
    pokemon,
    pagination,
    search
})