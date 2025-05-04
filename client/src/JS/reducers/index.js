import {combineReducers} from "redux";
import authReducer from "./authReducer";
import userReducer from"./userReducer";
import piscineReducer from "./piscineReducer";

const rootReducer=combineReducers({auth:authReducer,userReducer,piscineReducer})



export default rootReducer;