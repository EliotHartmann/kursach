import {SESSION_CLOSED, USER_CREATED, WARNING} from "../../constants/actionTypes";
import history from "../history";
import {MAIN_PAGE, RESTRICTED_PAGE} from "../../constants/paths";

export function createUser(passport, rank, jabber, email){
    return (dispatch) =>{
        console.log("newCall function called");
        const data={
            passport: passport,
            rank: rank,
            jabber: jabber,
            email: email
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