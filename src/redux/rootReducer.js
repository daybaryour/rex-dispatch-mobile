import { combineReducers } from "redux";
import authReducer from "./general/auth/authReducer";
import Message from "./message";

const rootReducer = combineReducers({ auth: authReducer, message: Message });

export default rootReducer;
