import{
 WARNING,
} from "../../constants/actionTypes";
import {initialState} from "../states";

export default function mainReducer(state = initialState, action) {
 switch (action.type) {
  case WARNING:
   return {...state, message: action.payload};
  default:
   return state;
 }
}