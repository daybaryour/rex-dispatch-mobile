import {
  NEW_DISPATCH_SUCCESS,
  NEW_DISPATCH_FAIL,
  DISPATCH_HISTORY_SUCCESS,
  DISPATCH_HISTORY_FAIL,
  DISPATCH_DETAILS_SUCCESS,
  DISPATCH_DETAILS_FAIL,
  TRACK_PARCEL_SUCCESS,
  TRACK_PARCEL_FAIL,
  SUBMIT_FEEDBACK_SUCCESS,
  SUBMIT_FEEDBACK_FAIL,
} from "./dispatchTypes";

const initialState = { dispatches: [], track_parcel: "" };

export function dispatchReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case NEW_DISPATCH_SUCCESS:
      return {
        ...state,
        dispatches: initialState.dispatches.push(payload),
      };
    case NEW_DISPATCH_FAIL: {
      return {
        ...state,
        dispatches: initialState.dispatches.push(payload),
      };
    }
    case TRACK_PARCEL_SUCCESS: {
      return {
        ...state,
        track_parcel: payload,
      };
    }
    case TRACK_PARCEL_FAIL: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}
