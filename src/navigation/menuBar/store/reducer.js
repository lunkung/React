/**
 * Created by lunk on 2020/6/14.
 */
import * as constants from "./constants"

const defaultState = {
    focused: false,
};
export default(state = defaultState, action) => {
    if(action.type === constants.MENU_FOCUSE){
        return {
            focused: true
        }
    }
    if(action.type === constants.MENU_BLUR){
        return {
            focused: false
        }
    }
    return state;
}