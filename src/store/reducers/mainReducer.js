import {
 MESSAGE_DELETED, NEW_MESSAGE,
 WARNING,
} from "../../constants/actionTypes";
import {initialState} from "../states";

export default function mainReducer(state = initialState, action) {
 switch (action.type) {
  case WARNING:
   return {...state, message: action.payload};
  case MESSAGE_DELETED:{
   console.log(state.messages);
   let newMessages = [];
   for(let i = 0; i<state.messages.length; i++){
    let message = state.messages[i];
    if(message.id !== action.payload)
     newMessages.push(message);
   }
   console.log(newMessages);
   return {...state, messages: newMessages}
  }
  case NEW_MESSAGE: {
   if(action.payload==='No info' || action.payload==='{"headers":{},"body":null,"statusCode":"NOT_FOUND","statusCodeValue":404}' || action.payload==='') {
    return state
   }else {
    let newMessages = [];
    if(state.messages.length !== 0){
     newMessages.push(state.messages);
    }
    newMessages.push({
     id: state.messages.length-1,
     data: action.payload
    });
    return {...state, messages: newMessages}
   }

  }
  default:
   return state;
 }
}