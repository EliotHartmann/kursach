import {
    CALL_SUBMITTED,
    CALLS_LOADED,
    INFO_LOADED,
    SEARCH_COMPLETED,
    WARNING
} from "../../constants/actionTypes";
import history from "../history";
import {RESTRICTED_PAGE} from "../../constants/paths";

export function loadInfo(){
    return (dispatch) =>{
        console.log("loadInfo method called");
        fetch('http://www.nypolicecw.com:7313/officer/info', {
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
            }else if (response.redirected){
                console.log(response.url);
                window.location.href = response.url;
            }
            else if(response.ok){
                response.json().then(data => {
                dispatch({
                    type: INFO_LOADED,
                    payload: data
                })})
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

export function DBSearch(surname, name, p_number){
    console.log("DBSearch method called");
    return (dispatch)=>{
        fetch('http://www.nypolicecw.com:7313/officer/search?passport='+p_number+"&surname="+surname+"&name="+name,  {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
            // body: data
        }).then(response=>{
            console.log(response);
            if (response.status === 403){
                history.push(RESTRICTED_PAGE);
            }else if (response.redirected){
                console.log(response.url);
                window.location.href = response.url;
            }else if(response.ok){
                console.log(response);
                response.json().then(data => {
                    dispatch({
                        type: SEARCH_COMPLETED,
                        payload: data
                    })
                    }
                )

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
        fetch('http://www.nypolicecw.com:7313/officer/active_call', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }).then(response=>{
            console.log(response);
            if (response.status === 403){
                history.push(RESTRICTED_PAGE);
            }else if (response.redirected){
                console.log(response.url);
                window.location.href = response.url;
            }
            if(response.ok){
                dispatch({
                    type: CALL_SUBMITTED,
                    payload: "Call successfully finished"
                })
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
        fetch('http://www.nypolicecw.com:7313/officer/call_history', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }).then(response=>{
            console.dir(response);
            if (response.status === 403){
                history.push(RESTRICTED_PAGE);
            }else if (response.redirected){
                console.log(response.url);
                window.location.href = response.url;
            }else if(response.ok){
                response.json().then( data => {
                    dispatch({
                        type: CALLS_LOADED,
                        payload: data
                    })
                })

            }
        }).catch(error => {
            dispatch({
                type: WARNING,
                payload: "Loading calls failed. " + error.message
            });
        });
    }
}