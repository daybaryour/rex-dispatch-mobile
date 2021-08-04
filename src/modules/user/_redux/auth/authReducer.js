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
AsyncStorage.setItem("user", "omo");
// console.log(AsyncStorage.getItem("user"));

const initialState = { isLoggedIn: false, token: null, user: null };
// user ? { isLoggedIn: true, user } : { isLoggedIn: false, user: null };

export default function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case VERIFICATION_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };
    case VERIFICATION_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        token: payload.auth,
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
