/**
 * Created by lunk on 2020/6/14.
 */
import * as constants from "./constants"
import { fromJS } from "immutable"

const defaultState = fromJS({
    focused: false,
});
export default(state = defaultState, action) => {
    if(action.type === constants.BTN_FOCUSE){
        return state.set("focused",true)
    }
    if(action.type === constants.BTN_BLUR){
        return state.set("focused",false)
    }
    return state;
}