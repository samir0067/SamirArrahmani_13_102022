import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/storeConfig";
import { Account } from "utils/types";

const account: Account = {} as Account;

export const setAccount = createAction<Account>("setAccount");

const accountReducer = createReducer(account, (builder) =>
  builder.addCase(setAccount, (state, action: PayloadAction<Account>) => {
    return action.payload;
  })
);

export const selectAccount = (state: RootState) => state.account;
export default accountReducer;
