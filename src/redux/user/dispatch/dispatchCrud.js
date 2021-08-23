import { post, patch, get } from "../../../helpers/axiosHelper";

function newDispatch(data) {
  return post(`/parcel/create_parcel`, data);
}

function dispatchHistory(user_type) {
  return get(`/parcel/dispatch_history?model=${user_type}`);
}

function trackParcel(data) {
  return get(`/parcel/track_parcel/${data}`);
}

function cancelParcel(id, data) {
  return patch(`/parcel/cancel_parcel/${id}`, data);
}

// complete parcel process
function parcelPayment(data) {
  return patch(`/parcel/complete_parcel_process`, data);
}

const dispatchCrud = {
  newDispatch,
  trackParcel,
  cancelParcel,
  parcelPayment,
  dispatchHistory,
};

export default dispatchCrud;
