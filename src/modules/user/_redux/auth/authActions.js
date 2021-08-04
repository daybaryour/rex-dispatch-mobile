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
import { SET_MESSAGE } from "../../../../redux/types";

//register
export const register = (data) => (dispatch) => {
  return authCrud
    .register(data)
    .then((response) => {
      dispatch({
        type: REGISTER_SUCCESS,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
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

export const login = (data) => (dispatch) => {
  return authCrud
    .login(data)
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
        payload: { auth: resp.token, user: resp.data },
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

export const verification = (phone) => (dispatch) => {
  return authCrud.verification(phone).then(
    (data) => {
      dispatch({
        type: VERIFICATION_SUCCESS,
        payload: { auth: data },
      });
      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({
        type: VERIFICATION_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        PAYLOAD: message,
      });

      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  authCrud.logout();

  dispatch({
    type: LOGOUT,
  });
};
