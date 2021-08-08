import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  VERIFICATION_SUCCESS,
  VERIFICATION_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./types";
import AsyncStorage from "@react-native-async-storage/async-storage";

// const user = JSON.parse(AsyncStorage.getItem("user"));
const user = {};

// const storage = async () => {
//   AsyncStorage.setItem("user", "omo");
//   const user = await AsyncStorage.getItem("user");
//   console.log(user, "line 15");
// };

// storage();
const initialState = { isLoggedIn: false, token: null, user: {} };
// user ? { isLoggedIn: true, user } : { isLoggedIn: false, user: null };

export default function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      AsyncStorage.setItem("token", payload.token);
      return {
        ...state,
        isLoggedIn: false,
        user: payload.user,
        token: payload.token,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case VERIFICATION_SUCCESS:
      AsyncStorage.setItem("isAuth", "true");
      return {
        ...state,
        isLoggedIn: true,
      };
    case VERIFICATION_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case LOGIN_SUCCESS:
      AsyncStorage.setItem("token", payload.token);
      AsyncStorage.setItem("isAuth", "true");
      return {
        ...state,
        isLoggedIn: true,
        token: payload.token,
        user: payload.user,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        token: null,
        user: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
}
