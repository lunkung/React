import { combineReducers } from "redux";
import { searchCriteria } from "../main/member/searchCriteria/store";
import { menuBar } from "../navigation/menuBar/store";

const reducer = combineReducers({
    searchCriteria: searchCriteria,
    menuBar: menuBar
})

export default reducer;