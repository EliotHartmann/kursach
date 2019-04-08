import {USER_CREATED, WARNING} from "../../constants/actionTypes";
import history from "../history";
import {RESTRICTED_PAGE} from "../../constants/paths";

export function getAccess(){
    return (dispatch) => {

    }
}

export function createUser(passport, rank, email, shift, p_id){
    return (dispatch) =>{
        console.log("newCall function called");
        const data={
            passportNumber: passport,
            rank: rank,
            shift: shift,
            mail: email,
            stationId: p_id
        };

        console.log(JSON.stringify(data));
        fetch('http://www.nypolicecw.com:7313/admin/create_officer', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            credentials: 'include'
        }).then(response =>{
            console.log(response);
            if (response.status === 403){
                history.push(RESTRICTED_PAGE);
            } else if (response.redirected){
                window.location.href = response.url;
            }else if(response.ok){
                response.json().then( data => {
                    dispatch({
                        type: USER_CREATED,
                        payload: "User successfully created.",
                        userInfo: data
                    });
                })

            }
            })
            .catch(error => {
                dispatch({
                    type: WARNING,
                    payload: "User creation failed. " + error.message
                });
            });
    };
}