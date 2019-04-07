import {
    LOGIN_SACCEED,
    LOGOUT,
    REGISTRATION_COMPLETED, REGISTRATION_FAILED,
    WARNING
} from "../../constants/actionTypes";
import history from '../history';
import {MAIN_PAGE, RESTRICTED_PAGE} from "../../constants/paths";
import {apiUrl} from "../../index";


export function makeWarning(message) {
    console.log("makeWarning method called");
    return{
        type: WARNING,
        payload: message
    }
}

export function login() {
    console.log("login method called");
    return (dispatch) => {
        fetch(apiUrl+'login', {
            method: 'GET',
            redirect: 'follow',
            credentials: 'include'
        }).then(response=>{
            if(response.ok){
                dispatch({
                    type: LOGIN_SACCEED,
                })
            }else if (response.status === 401){
                history.push(RESTRICTED_PAGE);
            }
        })
            .catch(error => {
                dispatch({
                    type: WARNING,
                    payload: "Login failed. " + error.message
                });
            });
    }
}

export function logout() {
    console.log("logout method called");
    return (dispatch) =>{
        fetch(apiUrl+'logout', {
            method: 'GET',
            credentials: 'include'
        }).then(response=>{
            if(response.status===302){
                history.push(MAIN_PAGE);
                dispatch({
                    type: LOGOUT,
                })
            }else if (response.status === 401){
                history.push(RESTRICTED_PAGE);
            }
        })
            .catch(error => {
                dispatch({
                    type: WARNING,
                    payload: "Logout failed. " + error.message
                });
            });
    }
}

export function register(login, password) {
    console.log("register method called");
        const data = {
          username: login,
          userPassword: password
        };
        console.log(JSON.stringify(data));
    return (dispatch) =>{
        fetch(apiUrl+'register', {
            method: 'POST',
            body: JSON.stringify(data),
            redirect: "follow",
            credentials: 'include'
        }).then(response=>{
            if(response.ok){
                dispatch({
                    type: REGISTRATION_COMPLETED,
                    payload: "Registration completed.",
                    login: login
                })
            }else if (response.status === 401){
                history.push(RESTRICTED_PAGE);
            }
        })
            .catch(error => {
                dispatch({
                    type: REGISTRATION_FAILED,
                    payload: "Registration failed. " + error.message
                });
            });
    }

}