import { combineReducers } from "redux";
import signIn from "store/reducers/signInReducer";

export const rootReducer = combineReducers({
  signIn,
});
