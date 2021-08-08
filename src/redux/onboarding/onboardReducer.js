import AsyncStorage from "@react-native-async-storage/async-storage";
import { USER_TYPE } from "./types";

const initialState = { user_type: "onboard" };

export default function onboardReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_TYPE:
      AsyncStorage.setItem("user_type", payload.user_type);

      return {
        ...state,
        user_type: payload.user_type,
      };
    default:
      return state;
  }
}
