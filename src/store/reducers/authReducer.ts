import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/storeConfig";
import { AuthType } from "utils/types";

const auth: AuthType = { token: "", isAuth: false };

export const setAuth = createAction<AuthType>("setAuth");

const authReducer = createReducer(auth, (builder) =>
  builder.addCase(setAuth, (state, action: PayloadAction<AuthType>) => {
    return action.payload;
  })
);

export const selectAuth = (state: RootState) => state.auth;
export default authReducer;
