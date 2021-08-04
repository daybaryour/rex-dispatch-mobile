import constants from "../../../../helpers/constants";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = constants.API_URL;

//register
export function register(user) {
  return axios.post(`${API_URL}/user/customer/sign_up`, user);
}

//login
export function login(data) {
  return axios.post(`${API_URL}/user/sign_in?model=customer`, data);
}

export function logout() {
  AsyncStorage.removeItem("user");
}

const authCrud = {
  register,
  login,
  logout,
};

export default authCrud;
