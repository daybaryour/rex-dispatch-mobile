import { post, patch, get } from "../../../helpers/axiosHelper";

function getRequests() {
  return get("/parcel/get_parcels");
}

const requestCrud = {
  getRequests,
};

export default requestCrud;
