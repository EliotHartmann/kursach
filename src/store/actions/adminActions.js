import {USER_CREATED, WARNING} from "../../constants/actionTypes";
import history from "../history";
import {RESTRICTED_PAGE} from "../../constants/paths";

export function createUser(passport, rank, jabber, email, shift, p_id){
    return (dispatch) =>{
        console.log("newCall function called");
        const data={
            passportNumber: passport,
            rank: rank,
            shift: shift,
            jabber: jabber,
            mail: email,
            stationId: p_id
        };

        console.log(JSON.stringify(data));
        fetch('www.nypolicecw.com:7313/dispatcher/create_user', {
            method: 'POST',
            body: JSON.stringify(data),
            redirect: "follow",
            credentials: 'include'
        }).then(response =>{
            if(response.ok){
                dispatch({
                    type: USER_CREATED,
                    payload: "User successfully created.",
                    userInfo: response.text()
                });
            } else if (response.status === 401){
                history.push(RESTRICTED_PAGE);
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