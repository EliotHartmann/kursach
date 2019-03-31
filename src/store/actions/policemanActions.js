import {
    CALL_SUBMITTED,
    CALLS_LOADED,
    INFO_LOADED,
    SEARCH_COMPLETED,
    SESSION_CLOSED,
    WARNING
} from "../../constants/actionTypes";
import history from "../history";
import {MAIN_PAGE, RESTRICTED_PAGE} from "../../constants/paths";

export function loadInfo(){
    return (dispatch) =>{
        console.log("loadInfo method called");
        fetch('www.nypolicecw.com:7313/dispatcher/officer/info', {
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
        fetch('www.nypolicecw.com:7313/search?passport='+p_number+"&name="+name+"&surname="+surname, {
            method: 'GET',
            redirect: "follow",
            credentials: 'include'
            // body: data
        }).then(response=>{
            if(response.ok){
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

export function callSubmit(description, time, status){
    console.log("callSubmit method called");
    return (dispatch)=>{
        let data = {
            description: description,
            time: time,
            status: status ? "ACTIVE" : "FINISHED"
        };
        console.log(data);
        fetch('www.nypolicecw.com:7313/active_call', {
            method: 'POST',
            body: JSON.stringify(data),
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
        fetch('www.nypolicecw.com:7313/officer/call_history', {
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