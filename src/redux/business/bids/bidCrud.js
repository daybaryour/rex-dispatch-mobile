import { post, get } from "../../../helpers/axiosHelper";

function getBids(status) {
  return get(`/business/bid/manage_bids?status=${status}`);
}

function placeBid(data) {
  return post(`/business/bid/create_bid`, data);
}

const bidCrud = {
  getBids,
  placeBid,
};

export default bidCrud;
