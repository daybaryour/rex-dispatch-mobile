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
import AsyncStorage from "@react-native-async-storage/async-storage";

// const user = JSON.parse(AsyncStorage.getItem("user"));
const user = {};

// const storage = async () => {
//   AsyncStorage.setItem("user", "omo");
//   const user = await AsyncStorage.getItem("user");
//   console.log(user, "line 15");
// };

// storage();
const initialState = {
  isLoggedIn: false,
  token: null,
  user: {},
  firebase_token: null,
};
// user ? { isLoggedIn: true, user } : { isLoggedIn: false, user: null };

export default async function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        user: payload.user,
      };
    case REGISTER_FAIL:
      return {
        ...state,
      };
    case VERIFICATION_SUCCESS:
      return {
        ...state,
      };
    case VERIFICATION_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case LOGIN_SUCCESS:
      await AsyncStorage.setItem("token", payload.token ? payload.token : " ");
      await AsyncStorage.setItem("isAuth", payload.user_type);
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
    case SET_PASSWORD_SUCCESS:
      await AsyncStorage.setItem("token", payload.token);
      await AsyncStorage.setItem("isAuth", "rider");
      return {
        ...state,
        isLoggedIn: true,
        token: payload.token,
        user: payload.user,
      };
    case SET_PASSWORD_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        token: null,
        user: null,
      };
    case FIREBASE_TOKEN_SUCCESS:
      return {
        ...state,
        firebase_token: payload,
      };
    case FIREBASE_TOKEN_FAIL:
      return {
        ...state,
      };
    case LOGOUT:
      await AsyncStorage.setItem("token", " ");
      await AsyncStorage.setItem("isAuth", " ");
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
}
