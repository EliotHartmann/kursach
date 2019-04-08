import {MESSAGE_DELETED, NEW_MESSAGE} from "../../constants/actionTypes";

export function deleteMessage(id){
    console.log("deleteMessage method called "+id);
    return{
        type: MESSAGE_DELETED,
        payload: id
    }
}

export function startNotifications() {
    console.log("startNotifications method called ");
    return (dispatch) =>{
        const eventSource = new EventSource("http://www.nypolicecw.com:7313/officer/message", {
                withCredentials: true
            });
            eventSource.onerror = function(e) {
                if (this.readyState == EventSource.CONNECTING) {
                    console.log("Соединение порвалось, пересоединяемся...");
                } else {
                    console.log("Ошибка, состояние: " + this.readyState);
                }
            };

            eventSource.onopen = function(e) {
                console.log("Соединение открыто");
            };

            eventSource.onmessage = function(e) {
                e.preventDefault();
                console.log("Пришло сообщение: " + e.data);
                dispatch({
                    type: NEW_MESSAGE,
                    payload: e.data
                })
            }
    }
    //
}