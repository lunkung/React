/**
 * Created by lunk on 2020/6/14.
 */
import * as constants from "./constants"
import axios from "axios"
import { fromJS } from "immutable"

const showMemberList = (data) => ({
   type: constants.MEMBER_LIST,
    data: fromJS(data)
});

export const getMemberList = () => {
    return (dispatch) => {
        axios.get("api/memberList.json").then((res) => {
            dispatch(showMemberList(res.data.data));
        }).catch(() => {
            console.log("error");
        })
    }
};