import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/storeConfig";
import { User } from "utils/types";

const user: User = {};

export const setUser = createAction<User>("setUser");

const userReducer = createReducer(user, (builder) =>
  builder.addCase(setUser, (state, action: PayloadAction<User>) => {
    return action.payload;
  })
);

export const selectUser = (state: RootState) => state.user;
export default userReducer;
