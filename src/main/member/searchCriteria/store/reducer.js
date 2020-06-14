/**
 * Created by lunk on 2020/6/14.
 */

const defaultState = {
    focused: false,
};
export default(state = defaultState, action) => {
    if(action.type === "handleBtnFocuse"){
        return {
            focused: true
        }
    }
    if(action.type === "handleBtnBlur"){
        return {
            focused: false
        }
    }
    return state;
}