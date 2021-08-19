import { post } from "../../../helpers/axiosHelper";

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

const transactionCrud = {
  initializeTrx,
  verifyTrx,
};

export default transactionCrud;
