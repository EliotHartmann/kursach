import {
    CALL_SUBMITTED,
    CALLS_LOADED,
    INFO_LOADED,
    SEARCH_COMPLETED,
    WARNING
} from "../../constants/actionTypes";
import history from "../history";
import {apiUrl} from "../../index";
import {RESTRICTED_PAGE} from "../../constants/paths";

export function loadInfo(){
    return (dispatch) =>{
        console.log("loadInfo method called");
        fetch(`${apiUrl}/officer/info`, {
            method: 'GET',
            redirect: "follow"
        }).then(response=>{
            if(response.ok){
                dispatch({
                    type: INFO_LOADED,
                    payload: response.text()
                })
            }else if (response.status === 401){
                history.push(RESTRICTED_PAGE);
            }
        })
            .catch(error => {
                dispatch({
                    type: WARNING,
                    payload: "Info loading failed. " + error.message
                });
            });
    }
}

export function DBSearch(name, surname, p_number){
    console.log("DBSearch method called");
    return (dispatch)=>{
        // let data = new URLSearchParams();
        // data.append('passport', p_number);
        // data.append('name', name);
        // data.append('surname', surname);
        fetch(apiUrl+'/search?passport='+p_number+"&surname="+surname+"&name="+name,  {
            method: 'GET',
            redirect: "follow",
            credentials: 'include'
            // body: data
        }).then(response=>{
            if(response.ok){
                console.log(response.text());
                dispatch({
                    type: SEARCH_COMPLETED,
                    payload: response.text()
                })
            }else if (response.status === 401){
                history.push(RESTRICTED_PAGE);
            }
        })
            .catch(error => {
                dispatch({
                    type: WARNING,
                    payload: "Searching failed. " + error.message
                });
            });
    }
}

export function callSubmit(){
    console.log("callSubmit method called");
    return (dispatch)=>{
        fetch(apiUrl+'officer/active_call', {
            method: 'POST',
            redirect: "follow",
            credentials: 'include'
        }).then(response=>{
            if(response.ok){
                dispatch({
                    type: CALL_SUBMITTED,
                    payload: "Call successfully finished"
                })
            }else if (response.status === 401){
                history.push(RESTRICTED_PAGE);
            }
        })
            .catch(error => {
                dispatch({
                    type: WARNING,
                    payload: "Finishing call failed. " + error.message
                });
            });
    }
}


export function loadCalls(){
    console.log("loadCalls method called");
    return (dispatch)=>{
        fetch(apiUrl+'officer/call_history', {
            method: 'GET',
            redirect: "follow",
            credentials: 'include'
        }).then(response=>{
            if(response.ok){
                dispatch({
                    type: CALLS_LOADED,
                    payload: response.text()
                })
            }else if (response.status === 401){
                history.push(RESTRICTED_PAGE);
            }
        }).catch(error => {
            dispatch({
                type: WARNING,
                payload: "Loading calls failed. " + error.message
            });
        });
    }
}