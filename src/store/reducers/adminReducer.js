import {
    USER_CREATED,
} from "../../constants/actionTypes";
import {initialState} from "../states";

export default function adminReducer(state = initialState, action){
    if (action.type === USER_CREATED) {
        let loadedUserInfo = JSON.parse(action.userInfo);
        let userInfo = {
            login: loadedUserInfo.login,
            password: loadedUserInfo.userPassword
        };
        return {...state, message:action.payload, createdUserInfo: userInfo}
    } else {
        return state;
    }
}