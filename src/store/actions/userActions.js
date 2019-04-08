import {STATS_LOADED, WARNING} from "../../constants/actionTypes";
import history from "../history";
import {RESTRICTED_PAGE} from "../../constants/paths";



export function loadStats(){
    console.log("user loadStats method called");
    return (dispatch) =>{
        fetch('http://www.nypolicecw.com:7313/map', {
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
            }else if (response.redirected){
                console.log(response.url);
                window.location.href = response.url;
            }else if(response.ok){
                response.json().then( data => {
                    dispatch({
                        type: STATS_LOADED,
                        payload: data
                    })
                })

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