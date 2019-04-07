import {STATS_LOADED, WARNING} from "../../constants/actionTypes";
import history from "../history";
import {RESTRICTED_PAGE} from "../../constants/paths";
import {apiUrl} from "../../index";


export function loadStats(){
    console.log("user loadStats method called");
    return (dispatch) =>{
        console.log("loadInfo method called");
        fetch(apiUrl+'map', {
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