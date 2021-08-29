import { post, get } from "../../../helpers/axiosHelper";

function getAllSubscriptions() {
  return get(`/business/subscription_type/get_subscription_type`);
}

function getSubscription() {
  return get(`/business/subscription/get_subscription`);
}

function subscribe(data) {
  return post(`/business/subscription/subscribe`, data);
}

const subscriptionCrud = {
  getAllSubscriptions,
  getSubscription,
  subscribe,
};

export default subscriptionCrud;
