import constants from "../../../helpers/constants";
import { post } from "../../../helpers/axiosHelper";

const API_URL = constants.API_URL;

//register
export function registerRider(user) {
  return post(`/business/dispatcher/create_dispatcher`, user);
}

const fleetCrud = {
  registerRider,
};

export default fleetCrud;
