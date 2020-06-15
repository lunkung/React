/**
 * Created by lunk on 2020/6/14.
 */
import * as constants from "./constants"
import { fromJS } from "immutable"


const defaultState = fromJS({
    list: [],
});
export default(state = defaultState, action) => {
    if(action.type === constants.MEMBER_LIST){
        return state.set("list", action.data);
    }
    return state;
}