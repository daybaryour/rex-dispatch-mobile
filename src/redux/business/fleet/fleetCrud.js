import { post, get } from "../../../helpers/axiosHelper";

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
