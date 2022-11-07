import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/storeConfig";
import { UserType } from "utils/types";

const user: UserType = {} as UserType;

export const setUser = createAction<UserType>("setUser");

const userReducer = createReducer(user, (builder) =>
  builder.addCase(setUser, (state, action: PayloadAction<UserType>) => {
    return action.payload;
  })
);

export const selectUser = (state: RootState) => state.user;
export default userReducer;
