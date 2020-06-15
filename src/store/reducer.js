import { combineReducers } from "redux-immutable";
import { searchCriteria } from "../main/member/searchCriteria/store";
import { menuBar } from "../navigation/menuBar/store";
import { member } from "../main/member/table/store";

const reducer = combineReducers({
    searchCriteria: searchCriteria,
    menuBar: menuBar,
    member: member
})

export default reducer;