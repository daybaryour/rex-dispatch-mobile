import dispatchCurd from "./dispatchCrud";

//get dispatch history
export const getHistory = () => (dispatch) => {
  return dispatchCurd
    .getHistory()
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

//   get deliverables
export const getDeliverables = () => (dispatch) => {
  return dispatchCurd
    .getDeliverables()
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
