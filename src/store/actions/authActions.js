import {
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
//document.location.href = newUrl;

export function login() {
    console.log("login method called");
    return (dispatch) => {
        fetch('http://www.nypolicecw.com:7313/login', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }).then(response=>{
            console.log(response);
            if (response.status === 401){
                history.push(RESTRICTED_PAGE);
            }else if(response.redirected){
                console.log(response.url);
                window.location.href = response.url;
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
        fetch('http://www.nypolicecw.com:7313/logout', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }).then(response=>{
            console.log(response);
            if (response.status === 403){
                history.push(RESTRICTED_PAGE);
            }else if(response.redirected){
                history.push(MAIN_PAGE);
                dispatch({
                    type: LOGOUT,
                })
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
        fetch('http://www.nypolicecw.com:7313/registration', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            credentials: 'include'
        }).then(response=>{
            console.log(response);
            if (response.status === 403){
                history.push(RESTRICTED_PAGE);
            }
            else if (response.redirected){
                console.log(response.url);
                window.location.href = response.url;
            }else if(response.ok){
                dispatch({
                    type: REGISTRATION_COMPLETED,
                    payload: "Registration completed.",
                    login: login
                })
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