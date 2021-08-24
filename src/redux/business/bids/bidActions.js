import bidCrud from "./bidCrud";

export const getBids = (status) => (dispatch) => {
  return bidCrud
    .getBids(status)
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

export const placeBid = (data) => (dispatch) => {
  return bidCrud
    .placeBid(data)
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
