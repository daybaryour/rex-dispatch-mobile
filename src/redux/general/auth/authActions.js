import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  VERIFICATION_SUCCESS,
  VERIFICATION_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SET_PASSWORD_SUCCESS,
  SET_PASSWORD_FAIL,
  FIREBASE_TOKEN_SUCCESS,
  FIREBASE_TOKEN_FAIL,
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
        payload: { user: resp.data },
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
        type: REGISTER_FAIL,
      });

      return Promise.reject(message);
    });
};

//LOGIN
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
        payload: { token: resp.token, user: resp.data, user_type: user_type },
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
        type: LOGIN_FAIL,
      });

      return Promise.reject(message);
    });
};

//forgot password
export const forgotPassword = (data, user_type) => (dispatch) => {
  return authCrud
    .forgotPassword(data, user_type)
    .then((response) => {
      const resp = response.data;
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

//reset password
export const resetPassword = (data, user_type) => (dispatch) => {
  return authCrud
    .resetPassword(data, user_type)
    .then((response) => {
      const resp = response.data;
      if (resp.error) {
        return Promise.reject(resp.message);
      }

      return Promise.resolve(resp.message);
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

//phone number verification
export const verification = (otp, user_type) => (dispatch) => {
  return authCrud
    .verification(otp, user_type)
    .then((data) => {
      const resp = data.data;

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

//resend otp
export const resendOtp = (data, user_type) => (dispatch) => {
  return authCrud
    .resendOtp(data, user_type)
    .then((response) => {
      const resp = response.data;
      if (resp.error) {
        return Promise.reject(resp.message);
      }

      return Promise.resolve(resp.message);
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

//set password (riders only)
export const setPassword = (data) => (dispatch) => {
  return authCrud
    .setPassword(data)
    .then((response) => {
      const resp = response.data;

      if (resp.error) {
        dispatch({
          type: SET_PASSWORD_FAIL,
        });
        return Promise.reject(resp.message);
      }

      dispatch({
        type: SET_PASSWORD_SUCCESS,
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
        type: SET_PASSWORD_FAIL,
      });
      return Promise.reject(message);
    });
};

//get firebase tokens
export const save_firebase_token = (data, user_type) => (dispatch) => {
  return authCrud
    .firebase_token(data, user_type)
    .then((data) => {
      const resp = data.data;

      if (resp.error) {
        dispatch({
          type: FIREBASE_TOKEN_FAIL,
        });

        return Promise.reject(resp.message);
      }
      dispatch({
        type: FIREBASE_TOKEN_SUCCESS,
        payload: data.token,
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
        type: FIREBASE_TOKEN_FAIL,
      });

      return Promise.reject(message);
    });
};

//
export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });

  return Promise.resolve();
};
