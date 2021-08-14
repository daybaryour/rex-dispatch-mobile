import { post, patch } from "../../../helpers/axiosHelper";
import AsyncStorage from "@react-native-async-storage/async-storage";

//register
export function register(user, user_type) {
  return post(`/${user_type}/sign_up`, user);
}

//login
export function login(data, user_type) {
  const url =
    user_type == "rider"
      ? "dispatcher/sign_in"
      : `auth/sign_in?model=${user_type}`;
  return post(`/${url}`, data);
}

//forgot password
export function forgotPassword(data, user_type) {
  const url =
    user_type == "rider"
      ? "auth/forgot_password?model=dispatcher"
      : `auth/forgot_password?model=${user_type}`;
  return post(`/${url}`, data);
}

//reset password
export function resetPassword(data, user_type) {
  const url =
    user_type == "rider"
      ? "auth/reset_password?model=dispatcher"
      : `auth/reset_password?model=${user_type}`;
  return post(`/${url}`, data);
}

//verification
export function verification(data, user_type) {
  const url =
    user_type == "rider" ? "dispatcher/verify" : `${user_type}/verify`;
  return patch(`/${url}`, data);
}

//send otp
export function resendOtp(data, user_type) {
  const url =
    user_type == "rider" ? "dispatcher/resend_otp" : `${user_type}/resend_otp`;
  return post(`/${url}`, data);
}

//set password (riders)
export function setPassword(data) {
  const url = "dispatcher/set_password";
  return patch(`/${url}`, data);
}

//get firebase token
export function firebase_token(data, user_type) {
  const url = user_type == "rider" ? "dispatcher" : user_type;
  return post(`/auth/save_firebase_token?model=${url}`, data);
}

export function logout() {
  AsyncStorage.removeItem("token");
  AsyncStorage.removeItem("isAuth");
  AsyncStorage.setItem("user_type", "onboard");
}

const authCrud = {
  register,
  login,
  forgotPassword,
  resetPassword,
  logout,
  verification,
  firebase_token,
  resendOtp,
  setPassword,
};

export default authCrud;
