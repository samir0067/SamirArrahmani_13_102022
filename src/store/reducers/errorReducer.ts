import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/storeConfig";
import { Error } from "utils/types";

const error: Error = {} as Error;

export const setError = createAction<Error>("setError");

const errorReducer = createReducer(error, (builder) =>
  builder.addCase(setError, (state, action: PayloadAction<Error>) => {
    return action.payload;
  })
);

export const selectError = (state: RootState) => state.error;
export default errorReducer;
