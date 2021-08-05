import { REGISTER_FLEET_SUCCESS, REGISTER_FLEET_FAIL } from "./fleetTypes";

const initialState = { fleet: [] };

export default function fleetReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_FLEET_SUCCESS:
      return {
        ...state,
        fleet: state.fleet.push(payload.data), //comback to check if this works and add a root reducer
      };
    case REGISTER_FLEET_FAIL:
      return {
        ...state,
      };

    default:
      return state;
  }
}
