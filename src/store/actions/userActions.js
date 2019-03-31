import {USER_INFO_LOADED, SESSION_CLOSED, STATS_LOADED, WARNING} from "../../constants/actionTypes";
import history from "../history";
import {MAIN_PAGE, RESTRICTED_PAGE} from "../../constants/paths";

export function loadInfo(){
    console.log("user loadInfo method called");
    return (dispatch) =>{
        console.log("loadInfo method called");
        fetch('www.nypolicecw.com:7313/dispatcher/info', {
            method: 'GET',
            redirect: "follow",
            credentials: 'include'
        }).then(response=>{
            if(response.ok){
                dispatch({
                    type: USER_INFO_LOADED,
                    payload: response.text()
                })
            }else if (response.status === 401){
                history.push(RESTRICTED_PAGE);
            }
        })
            .catch(error => {
                dispatch({
                    type: WARNING,
                    payload: "User's info loading failed. " + error.message
                });
            });
    }
}
export function loadStats(){
    console.log("user loadStats method called");
    return (dispatch) =>{
        console.log("loadInfo method called");
        fetch('www.nypolicecw.com:7313/map', {
            method: 'GET',
            redirect: "follow",
            credentials: 'include'
        }).then(response=>{
            if(response.ok){
                dispatch({
                    type: STATS_LOADED,
                    payload: response.text()
                })
            }else if (response.status === 401){
                history.push(RESTRICTED_PAGE);
            }
        })
            .catch(error => {
                dispatch({
                    type: WARNING,
                    payload: "Statistics loading failed. " + error.message
                });
            });
    }
}