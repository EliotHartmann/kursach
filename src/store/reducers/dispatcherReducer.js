import {
    CALL_CREATED,

} from "../../constants/actionTypes";
import {initialState} from "../states";

export default function dispatcherReducer(state = initialState, action){
    if (action.type === CALL_CREATED) {
        return {...state, message: action.payload};
    } else {
        return state;
    }
}