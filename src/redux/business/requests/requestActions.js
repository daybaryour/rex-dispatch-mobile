import requestCrud from "./requestCrud";

export const getRequests = () => (dispatch) => {
  return requestCrud
    .getRequests()
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
