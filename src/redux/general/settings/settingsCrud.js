import { get, post, patch } from "../../../helpers/axiosHelper";

export function getUser(user_type) {
  const url =
    user_type == "customer"
      ? "customer/customer_profile"
      : user_type == "business"
      ? "business/business_profile"
      : "dispatcher/dispatcher_profile";
  return get(`/user/${url}`);
}

export function editProfile(data, user_type) {
  const url =
    user_type == "customer"
      ? "customer"
      : user_type == "business"
      ? "business"
      : "dispatcher";

  return patch(`/user/${url}/update_user`, data);
}

export function changeAvatar(data, user_type) {
  const url =
    user_type == "customer"
      ? "customer"
      : user_type == "business"
      ? "business"
      : "dispatcher";

  return patch(`/user/${url}/profile_picture`, data);
}

export function changePassword(data, user_type) {
  const url =
    user_type == "customer"
      ? "customer"
      : user_type == "business"
      ? "business"
      : "dispatcher";

  return patch(`/user/${url}/change_password`, data);
}

const settingsCrud = {
  getUser,
  editProfile,
  changeAvatar,
  changePassword,
};

export default settingsCrud;
