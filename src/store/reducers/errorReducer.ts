import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/storeConfig";
import { ErrorType } from "utils/types";

const error: ErrorType = {} as ErrorType;

export const setError = createAction<ErrorType>("setError");

const errorReducer = createReducer(error, (builder) =>
  builder.addCase(setError, (state, action: PayloadAction<ErrorType>) => {
    return action.payload;
  })
);

export const selectError = (state: RootState) => state.error;
export default errorReducer;
