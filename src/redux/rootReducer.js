import { combineReducers } from "redux";
import authReducer from "../modules/user/_redux/auth/authReducer";
import Message from "./message";

const rootReducer = combineReducers({ auth: authReducer, message: Message });

export default rootReducer;
