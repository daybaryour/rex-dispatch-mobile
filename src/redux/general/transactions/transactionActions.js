import transactionCrud from "./tansactionCrud";

//initialize transaction
export const initializeTransaction = (data, user_type) => (dispatch) => {
  return transactionCrud
    .initializeTrx(data, user_type)
    .then((response) => {
      const resp = response.data;
      if (resp.error) {
        return Promise.reject(resp.message);
      }

      return Promise.resolve(resp);
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

//verify transaction
export const verifyTransaction = (data, user_type) => (dispatch) => {
  return transactionCrud
    .verifyTrx(data, user_type)
    .then((response) => {
      const resp = response.data;
      if (resp.error) {
        return Promise.reject(resp.message);
      }

      return Promise.resolve(resp);
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

//get my transactions
export const getTransactions = (user_type) => (dispatch) => {
  return transactionCrud
    .getTransactions(user_type)
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
