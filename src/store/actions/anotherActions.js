import {MESSAGE_DELETED} from "../../constants/actionTypes";

export function deleteMessage(id){
    console.log("deleteMessage method called"+id);
    return{
        type: MESSAGE_DELETED,
        payload: id
    }
}