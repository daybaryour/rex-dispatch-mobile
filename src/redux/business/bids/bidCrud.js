import { post, patch, get } from "../../../helpers/axiosHelper";

function getBids(status) {
  return get(`/business/bid/manage_bids?status=${status}`);
}

const bidCrud = {
  getBids,
};

export default bidCrud;
