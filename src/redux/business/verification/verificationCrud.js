import { post } from "../../../helpers/axiosHelper";

//verify business
function verifyBusiness(data) {
  return post(`/business/verification/add_verification`);
}

const verifyCrud = {
  verifyBusiness,
};

export default verifyCrud;
