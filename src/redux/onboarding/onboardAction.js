import { USER_TYPE } from "./types";

export const set_user_type = (data) => (dispatch) => {
  dispatch({
    type: USER_TYPE,
    payload: { user_type: data },
  });
};

export default set_user_type;
