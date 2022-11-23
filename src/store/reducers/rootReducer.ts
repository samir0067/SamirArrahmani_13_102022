import { combineReducers } from "redux";
import signIn from "store/reducers/signInReducer";
import account from "store/reducers/accountReducer";

export const rootReducer = combineReducers({
  signIn,
  account,
});
