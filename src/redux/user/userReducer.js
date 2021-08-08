import { combineReducers } from "redux";
import { dispatchReducer } from "./dispatch/dispatchReducer";

const userReducer = combineReducers({
  dispatch: dispatchReducer,
});

export default userReducer;
