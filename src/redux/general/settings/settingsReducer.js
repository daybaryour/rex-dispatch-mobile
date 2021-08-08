import settingsTypes from "./settingsTypes";

const initialState = { user: {} };

export default function settingsReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case settingsTypes.GET_USER_SUCCESS: {
      return {
        ...state,
        user: payload,
      };
    }
    case settingsTypes.GET_USER_FAIL: {
      return {
        ...state,
      };
    }
    case settingsTypes.EDIT_PROFILE_SUCCESS: {
      return {
        ...state,
        user: payload,
      };
    }
    case settingsTypes.EDIT_PROFILE_FAIL: {
      return {
        ...state,
      };
    }
    case settingsTypes.CHANGE_PASSWORD_SUCCESS: {
      return {
        ...state,
      };
    }
    case settingsTypes.CHANGE_PASSWORD_FAIL: {
      return {
        ...state,
      };
    }
    case settingsTypes.CHANGE_AVATAR_SUCCESS: {
      return {
        ...state,
        user: payload,
      };
    }
    case settingsTypes.CHANGE_AVATAR_FAIL: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}
