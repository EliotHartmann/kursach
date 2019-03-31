import history from "../history";
import {CALL_CREATED, SESSION_CLOSED, WARNING} from "../../constants/actionTypes";
import {MAIN_PAGE, RESTRICTED_PAGE} from "../../constants/paths";

export function newCall(street, house, district, description, type){
    return (dispatch) =>{
        console.log("newCall function called");
        const data={
            location: {
                street: street,
                houseNumber: house,
                district: {
                    name: district,
                }
            },
            description: description,
            type: type,
        };

        console.log(JSON.stringify(data));
        fetch('www.nypolicecw.com:7313/dispatcher/create_call', {
                    method: 'POST',
                    redirect: "follow",
                    body: JSON.stringify(data),
                    credentials: 'include'
        }).then(response =>{
                if(response.ok){
                    dispatch({
                        type: CALL_CREATED,
                        payload: "Call successfully created."
                    });
                } else if (response.status === 401){
                    history.push(RESTRICTED_PAGE);
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

