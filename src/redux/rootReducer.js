import { combineReducers } from "redux";
import businessReducer from "./business/businessReducer";
import authReducer from "./general/auth/authReducer";
import settingsReducer from "./general/settings/settingsReducer";
import onboardReducer from "./onboarding/onboardReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  business: businessReducer,
  user: userReducer,
  onboard: onboardReducer,
  settings: settingsReducer,
});

export default rootReducer;
