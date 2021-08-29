import subscriptionCrud from "./subscriptionCrud";

//get all subscriptions
export const getAllSubscriptions = () => (dispatch) => {
  return subscriptionCrud
    .getAllSubscriptions()
    .then((response) => {
      const resp = response.data;

      if (resp.error) {
        return Promise.reject(resp.message);
      }

      return Promise.resolve(resp.data);
    })
    .catch((error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return Promise.reject(message);
    });
};

//get current subscription
export const getSubscription = () => (dispatch) => {
  return subscriptionCrud
    .getSubscription()
    .then((response) => {
      const resp = response.data;

      if (resp.error) {
        return Promise.reject(resp.message);
      }

      return Promise.resolve(resp.data);
    })
    .catch((error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return Promise.reject(message);
    });
};

//get fleet
export const subscribe = (data) => (dispatch) => {
  return subscriptionCrud
    .subscribe(data)
    .then((response) => {
      const resp = response.data;

      if (resp.error) {
        return Promise.reject(resp.message);
      }

      return Promise.resolve(resp.message);
    })
    .catch((error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return Promise.reject(message);
    });
};
