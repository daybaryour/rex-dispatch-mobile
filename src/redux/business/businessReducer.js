import { combineReducers } from "redux";
import fleetReducer from "./fleet/fleetReducer";

const businessReducer = combineReducers({ fleet: fleetReducer });

export default businessReducer;
