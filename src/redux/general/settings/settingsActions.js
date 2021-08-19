import settingsCrud from "./settingsCrud";
import settingsTypes from "./settingsTypes";

//get current user details
export const getUserDetails = (user_type) => (dispatch) => {
  return settingsCrud
    .getUser(user_type)
    .then((response) => {
      const resp = response.data;

      if (resp.error) {
        dispatch({
          type: settingsTypes.GET_USER_FAIL,
        });

        return Promise.reject(resp.message);
      }
      dispatch({
        type: settingsTypes.GET_USER_SUCCESS,
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

      console.log(error);

      dispatch({
        type: settingsTypes.GET_USER_FAIL,
      });

      return Promise.reject(message);
    });
};

//edit user profile
export const editUserProfile = (data, user_type) => (dispatch) => {
  return settingsCrud
    .editProfile(data, user_type)
    .then((response) => {
      const resp = response.data;

      if (resp.error) {
        dispatch({
          type: settingsTypes.EDIT_PROFILE_FAIL,
        });

        return Promise.reject(resp.message);
      }
      dispatch({
        type: settingsTypes.EDIT_PROFILE_SUCCESS,
        payload: resp.data,
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
        type: settingsTypes.EDIT_PROFILE_FAIL,
      });

      return Promise.reject(message);
    });
};

//change password
export const changePassword = (data, user_type) => (dispatch) => {
  return settingsCrud
    .changePassword(data, user_type)
    .then((response) => {
      const resp = response.data;

      if (resp.error) {
        dispatch({
          type: settingsTypes.CHANGE_PASSWORD_FAIL,
        });

        return Promise.reject(resp.message);
      }
      dispatch({
        type: settingsTypes.CHANGE_PASSWORD_SUCCESS,
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
        type: settingsTypes.CHANGE_PASSWORD_FAIL,
      });

      return Promise.reject(message);
    });
};

//change avatar
export const changeAvatar = (data, user_type) => (dispatch) => {
  return settingsCrud
    .changeAvatar(data, user_type)
    .then((response) => {
      const resp = response.data;

      if (resp.error) {
        dispatch({
          type: settingsTypes.CHANGE_AVATAR_FAIL,
        });

        return Promise.reject(resp.message);
      }
      dispatch({
        type: settingsTypes.CHANGE_AVATAR_SUCCESS,
        payload: resp.data,
      });

      return Promise.resolve(resp.data);
    })
    .catch((error) => {
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: settingsTypes.CHANGE_AVATAR_FAIL,
      });

      return Promise.reject(message);
    });
};
