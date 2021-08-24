import { post, get } from "../../../helpers/axiosHelper";

function getHistory() {
  return get("/dispatcher/dispatch_history");
}

function getDeliverables() {
  return get("/dispatcher/deliverables/");
}

const dispatchCurd = {
  getHistory,
  getDeliverables,
};

export default dispatchCurd;
