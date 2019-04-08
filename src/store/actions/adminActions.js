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
        fetch('http://www.nypolicecw.com:7313admin/create_officer', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            credentials: 'include'
        }).then(response =>{
            console.log(response);
            if(response.ok){
                let userInfo = response.json();
                dispatch({
                    type: USER_CREATED,
                    payload: "User successfully created.",
                    userInfo: userInfo
                });
            } else if (response.status === 401){
                history.push(RESTRICTED_PAGE);
            } else if (response.redirected){
                console.log(response.headers.get("Location"));
                window.location.href = response.url;
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