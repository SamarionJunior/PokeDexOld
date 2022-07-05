import { combineReducers } from "redux";

import pokemon from "./pokemon";
import pagination from "./pagination";

export default combineReducers({
    pokemon,
    pagination
})