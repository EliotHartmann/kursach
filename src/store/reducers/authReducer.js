import {
    initialState
} from "../states";
import {
    LOGIN_SACCEED,
    LOGOUT,
    REGISTRATION_COMPLETED,
    REGISTRATION_FAILED,
} from "../../constants/actionTypes";

export default function authReducer(state = initialState, action){
    switch(action.type){

        case LOGOUT:
            return {...state,
                login: '',
                message: '',
                role: '',
                info: {
                    salary: '',
                    rank: '',
                    p_station: '',
                    name: '',
                    surname: '',
                    jabber: '',
                    email: '',
                    status: '',
                    historyOfWork: []
                },
                calls: [],
                humans: [],
                createdUserInfo: {
                    login: '',
                    password: ''
                },
                stats: []};
        case LOGIN_SACCEED:
            return {...state, message: action.payload};
        case REGISTRATION_COMPLETED:
            return {...state, message: action.payload, login: action.login};
        case REGISTRATION_FAILED:
            return {...state, message: action.payload};
        default:
            return state;
    }
}
