import reduceReducers from 'reduce-reducers';
import authReducer from './authReducer';
import policemanReducer from "./policemanReducer";
import dispatcherReducer from "./dispatcherReducer";
import adminReducer from "./adminReducer";
import userReducer from "./userReducer";
import mainReducer from "./mainReducer";

export default reduceReducers(
        authReducer,
        policemanReducer,
        dispatcherReducer,
        adminReducer,
        userReducer,
        mainReducer
);