import { combineReducers } from "redux";
import error from "store/reducers/errorReducer";
import auth from "store/reducers/authReducer";
import account from "store/reducers/accountReducer";
import user from "store/reducers/userReducer";

export const rootReducer = combineReducers({
  error,
  auth,
  account,
  user,
});
