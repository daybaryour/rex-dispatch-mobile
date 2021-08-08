import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  VERIFICATION_SUCCESS,
  VERIFICATION_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./types";

import authCrud from "./authCrud";

//register
export const register = (data, user_type) => (dispatch) => {
  return authCrud
    .register(data, user_type)
    .then((response) => {
      const resp = response.data;
      if (resp.error) {
        dispatch({
          type: REGISTER_FAIL,
        });

        return Promise.reject(resp.message);
      }
      dispatch({
        type: REGISTER_SUCCESS,
        payload: { token: resp.token, user: resp.data },
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

      dispatch({
        type: REGISTER_FAIL,
      });

      return Promise.reject(message);
    });
};

export const login = (data, user_type) => (dispatch) => {
  return authCrud
    .login(data, user_type)
    .then((data) => {
      const resp = data.data;

      if (resp.error) {
        dispatch({
          type: LOGIN_FAIL,
        });

        return Promise.reject(resp.message);
      }
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { token: resp.token, user: resp.data },
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

      dispatch({
        type: LOGIN_FAIL,
      });

      return Promise.reject(message);
    });
};

export const verification = (otp, user_type) => (dispatch) => {
  return authCrud
    .verification(otp, user_type)
    .then((data) => {
      const resp = data.data;
      console.log(resp);
      if (resp.error) {
        dispatch({
          type: VERIFICATION_FAIL,
        });

        return Promise.reject(resp.message);
      }

      dispatch({
        type: VERIFICATION_SUCCESS,
        // payload: { auth: data },
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
      dispatch({
        type: VERIFICATION_FAIL,
      });

      return Promise.reject(message);
    });
};

export const logout = () => (dispatch) => {
  authCrud.logout();

  dispatch({
    type: LOGOUT,
  });
};
