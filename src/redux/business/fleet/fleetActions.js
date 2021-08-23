import { REGISTER_FLEET_SUCCESS, REGISTER_FLEET_FAIL } from "./fleetTypes";
import fleetCrud from "./fleetCrud";

//register
export const registerRider = (data) => (dispatch) => {
  return fleetCrud
    .registerRider(data)
    .then((response) => {
      const resp = response.data;
      if (resp.error) {
        dispatch({
          type: REGISTER_FLEET_FAIL,
        });

        return Promise.reject(resp.message);
      }
      dispatch({
        type: REGISTER_FLEET_SUCCESS,
        payload: { token: resp.token, user: resp.data },
      });

      return Promise.resolve(resp);
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

//get fleet
export const getFleet = () => (dispatch) => {
  return fleetCrud
    .getFleet()
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
