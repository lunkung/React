/**
 * Created by lunk on 2020/6/14.
 */
import * as constants from "./constants"
import { fromJS } from "immutable"


const defaultState = fromJS({
    focused: false,
});
export default(state = defaultState, action) => {
    if(action.type === constants.MENU_FOCUSE){
        //immutable的 set的方法会结合之前的immutablede 对象
        //和设置的值 返回一个全新的对象
        return state.set("focused",true);
    }
    if(action.type === constants.MENU_BLUR){
        return state.set("focused",false);
    }
    return state;
}