import verifyCrud from "./verificationCrud";

//verify business
export const verifyBusiness = (data) => (dispatch) => {
  return verifyCrud
    .verifyBusiness(data)
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
