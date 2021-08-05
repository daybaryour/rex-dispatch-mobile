import constants from "../../../helpers/constants";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = constants.API_URL;

//register
export function register(user, user_type) {
  return axios.post(`${API_URL}/user/${user_type}/sign_up`, user);
}

//login
export function login(data, user_type) {
  const url =
    user_type == "rider"
      ? "user/dispatcher/sign_in"
      : `user/sign_in?model=${user_type}`;
  return axios.post(`${API_URL}/${url}`, data);
}

//verification
export function verification(data, user_type) {
  url =
    user_type == "rider"
      ? "user/dispatcher/verify"
      : `user/${user_type}/verify`;
  return axios.patch(`${API_URL}/${url}`, data);
}

export function logout() {
  AsyncStorage.removeItem("user");
}

const authCrud = {
  register,
  login,
  logout,
  verification,
};

export default authCrud;
