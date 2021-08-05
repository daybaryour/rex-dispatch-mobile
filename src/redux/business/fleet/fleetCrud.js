import constants from "../../../helpers/constants";
import axios from "axios";

const API_URL = constants.API_URL;

//register
export function registerRider(user) {
  return axios.post(`${API_URL}/user/business/create_dispatcher`, user);
}

const fleetCrud = {
  registerRider,
};

export default fleetCrud;
