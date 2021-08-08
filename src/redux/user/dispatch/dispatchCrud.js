import { post, patch } from "../../../helpers/axiosHelper";

export function newDispatch(data) {
  return post(`/parcel/create_parcel`, data);
}

const dispatchCrud = {
  newDispatch,
};

export default dispatchCrud;
