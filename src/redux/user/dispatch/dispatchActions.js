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

import dispatchCrud from "./dispatchCrud";

//send package
export const newDispatchRequest = (data) => (dispatch) => {
  return dispatchCrud
    .newDispatch(data)
    .then((response) => {
      const resp = response.data;

      if (resp.error) {
        dispatch({
          type: NEW_DISPATCH_FAIL,
        });

        return Promise.reject(resp.message);
      }
      dispatch({
        type: NEW_DISPATCH_SUCCESS,
        payload: resp.data,
      });

      return Promise.resolve(resp.data);
    })
    .catch((error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: NEW_DISPATCH_FAIL,
      });

      return Promise.reject(message);
    });
};

//track parcel
export const trackParcel = (data) => (dispatch) => {
  return dispatchCrud
    .trackParcel(data)
    .then((response) => {
      const resp = response.data;
      console.log(resp);
      if (resp.error) {
        dispatch({
          type: TRACK_PARCEL_FAIL,
        });

        return Promise.reject(resp.message);
      }
      dispatch({
        type: TRACK_PARCEL_SUCCESS,
        payload: resp.data,
      });

      return Promise.resolve(resp.data);
    })
    .catch((error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: TRACK_PARCEL_FAIL,
      });

      return Promise.reject(message);
    });
};

export const cancelParcel = (id, data) => (dispatch) => {
  console.log("got here");
  return dispatchCrud
    .cancelParcel(data)
    .then((response) => {
      const resp = response.data;
      console.log(resp);
      if (resp.error) {
        return Promise.reject(resp.message);
      }

      return Promise.resolve(resp.data);
    })
    .catch((error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return Promise.reject(message);
    });
};
