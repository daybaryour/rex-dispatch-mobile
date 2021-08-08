import { post, patch } from "../../../helpers/axiosHelper";
import AsyncStorage from "@react-native-async-storage/async-storage";

//register
export function register(user, user_type) {
  return post(`/user/${user_type}/sign_up`, user);
}

//login
export function login(data, user_type) {
  const url =
    user_type == "rider"
      ? "user/dispatcher/sign_in"
      : `user/sign_in?model=${user_type}`;
  return post(`/${url}`, data);
}

//verification
export function verification(data, user_type) {
  url =
    user_type == "rider"
      ? "user/dispatcher/verify"
      : `user/${user_type}/verify`;
  return patch(`/${url}`, data);
}

export function logout() {
  AsyncStorage.removeItem("token");
  AsyncStorage.removeItem("isAuth");
  AsyncStorage.setItem("user_type", "onboard");
}

const authCrud = {
  register,
  login,
  logout,
  verification,
};

export default authCrud;
