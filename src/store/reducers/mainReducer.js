import {
 MESSAGE_DELETED,
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
  default:
   return state;
 }
}