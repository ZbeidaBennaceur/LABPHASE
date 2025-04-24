import {combineReducers} from "redux";
import authReducer from "./authReducer";
import userReducer from"./userReducer";

const rootReducer=combineReducers({auth:authReducer,userReducer})



export default rootReducer;