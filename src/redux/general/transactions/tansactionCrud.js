import { post, get } from "../../../helpers/axiosHelper";

//initialize transaction
function initializeTrx(data, user_type) {
  return post(
    `/general/transactions/initialize_transaction?user=${user_type}`,
    data
  );
}

//verify transaction
function verifyTrx(data, user_type) {
  return post(
    `/general/transactions/verify_transaction?user=${user_type}`,
    data
  );
}

//get my transactions
function getTransactions(user_type) {
  return get(`/general/transactions/transaction_history?model=${user_type}`);
}

const transactionCrud = {
  initializeTrx,
  verifyTrx,
  getTransactions,
};

export default transactionCrud;
