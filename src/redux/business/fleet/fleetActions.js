import { REGISTER_FLEET_SUCCESS, REGISTER_FLEET_FAIL } from "./fleetTypes";
import fleetCrud from "./fleetCrud";
import { SET_MESSAGE, CLEAR_MESSAGE } from "../../messageTypes";

//register
export const registerRider = (data) => (dispatch) => {
  return fleetCrud
    .registerRider(data)
    .then((response) => {
      const resp = response.data;
      console.log(resp);
      if (resp.error) {
        dispatch({
          type: REGISTER_FLEET_FAIL,
        });
        dispatch({
          type: SET_MESSAGE,
          payload: resp.message,
        });

        return Promise.reject();
      }
      dispatch({
        type: REGISTER_RIDER_SUCCESS,
        payload: { token: resp.token, user: resp.data },
      });
      dispatch({
        type: SET_MESSAGE,
        payload: resp.message,
      });

      return Promise.resolve();
    })
    .catch((error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(error);
      dispatch({
        type: REGISTER_FLEET_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    });
};
