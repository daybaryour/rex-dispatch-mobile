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
import { SET_MESSAGE, CLEAR_MESSAGE } from "../../messageTypes";

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
        dispatch({
          type: SET_MESSAGE,
          payload: resp.message,
        });

        return Promise.reject();
      }
      dispatch({
        type: REGISTER_SUCCESS,
        payload: { token: resp.token, user: resp.data },
      });

      dispatch({
        type: CLEAR_MESSAGE,
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

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
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
        dispatch({
          type: SET_MESSAGE,
          payload: resp.message,
        });

        return Promise.reject();
      }
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { token: resp.token, user: resp.data },
      });
      dispatch({
        type: CLEAR_MESSAGE,
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
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
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
        dispatch({
          type: SET_MESSAGE,
          payload: resp.message,
        });

        return Promise.reject();
      }

      dispatch({
        type: VERIFICATION_SUCCESS,
        // payload: { auth: data },
      });
      dispatch({
        type: CLEAR_MESSAGE,
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
        type: VERIFICATION_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        PAYLOAD: message,
      });

      return Promise.reject();
    });
};

export const logout = () => (dispatch) => {
  authCrud.logout();

  dispatch({
    type: LOGOUT,
  });
};
