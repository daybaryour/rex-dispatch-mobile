import { REGISTER_FLEET_SUCCESS, REGISTER_FLEET_FAIL } from "./fleetTypes";
import fleetCrud from "./fleetCrud";

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

        return Promise.reject(resp.message);
      }
      dispatch({
        type: REGISTER_RIDER_SUCCESS,
        payload: { token: resp.token, user: resp.data },
      });

      return Promise.resolve(resp.message);
    })
    .catch((error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_FLEET_FAIL,
      });

      return Promise.reject(message);
    });
};
