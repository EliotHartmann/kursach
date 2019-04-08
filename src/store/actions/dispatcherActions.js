import history from "../history";
import {CALL_CREATED, WARNING} from "../../constants/actionTypes";
import {RESTRICTED_PAGE} from "../../constants/paths";


export function newCall(street, house, description, type){
    return (dispatch) =>{
        console.log("newCall function called");
        const data={
            callLocation: {
                street: street,
                houseNumber: house
            },
            description: description,
            crimeType: type,
        };

        console.log(JSON.stringify(data));
        fetch('http://www.nypolicecw.com:7313/dispatcher/create_call', {
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
            }else if (response.redirected){
                console.log(response.url);
                window.location.href = response.url;
            }else if(response.ok){
                    dispatch({
                        type: CALL_CREATED,
                        payload: "Call successfully created."
                    });
                }
        })
            .catch(error => {
                dispatch({
                    type: WARNING,
                    payload: "Call creation failed. " + error.message
                });
            });
    };
}

