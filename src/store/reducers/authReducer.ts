import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/storeConfig";
import { Auth } from "utils/types";

const auth: Auth = { token: "", isAuth: false };

export const setAuth = createAction<Auth>("setAuth");

const authReducer = createReducer(auth, (builder) =>
  builder.addCase(setAuth, (state, action: PayloadAction<Auth>) => {
    return action.payload;
  })
);

export const selectAuth = (state: RootState) => state.auth;
export default authReducer;
