import { combineReducers } from "redux";
import signIn from "store/reducers/signInReducer";

/**
 * the root of the reducers combined
 */
export const rootReducer = combineReducers({
  signIn,
});
