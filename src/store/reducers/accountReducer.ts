import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/storeConfig";
import { AccountType } from "utils/types";

const account: AccountType = {} as AccountType;

export const setAccount = createAction<AccountType>("setAccount");

const accountReducer = createReducer(account, (builder) =>
  builder.addCase(setAccount, (state, action: PayloadAction<AccountType>) => {
    return action.payload;
  })
);

export const selectAccount = (state: RootState) => state.account;
export default accountReducer;
