import constants from "../../../helpers/constants";
import { post, get } from "../../../helpers/axiosHelper";

const API_URL = constants.API_URL;

//register
function registerRider(user) {
  return post(`/business/dispatcher/create_dispatcher`, user);
}

//get fleet
function getFleet() {
  return get("/business/dispatcher/get_dispatcher");
}

const fleetCrud = {
  registerRider,
  getFleet,
};

export default fleetCrud;
