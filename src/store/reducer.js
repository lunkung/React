import { combineReducers } from "redux";
import searchCriteriaReducer from "../main/member/searchCriteria/store/reducer";

const reducer = combineReducers({
    searchCriteria:searchCriteriaReducer
})

export default reducer;