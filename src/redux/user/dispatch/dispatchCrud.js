import { post, patch, get } from "../../../helpers/axiosHelper";

export function newDispatch(data) {
  return post(`/parcel/create_parcel`, data);
}

export function trackParcel(data) {
  return get(`/parcel/track_parcel/${data}`);
}

export function cancelParcel(id, data) {
  return patch(`/parcel/cancel_parcel/${id}`, data);
}

const dispatchCrud = {
  newDispatch,
  trackParcel,
  cancelParcel,
};

export default dispatchCrud;
