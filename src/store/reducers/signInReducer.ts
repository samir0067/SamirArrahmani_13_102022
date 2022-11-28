import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/storeConfig";
import { SignInType } from "utils/types";

/**
 * The initial state of the reducer is passed as first argument
 */
const signIn: SignInType = {
  isAuth: false,
  token: undefined,
  email: undefined,
  firstName: undefined,
  lastName: undefined,
  rememberMe: false,
};

/**
 * A function utility to create actions for the given type
 */
export const signInAuth = createAction<SignInType>("signInAuth");
export const getSignInUser = createAction<SignInType>("getSignInUser");
export const updateSignInUser = createAction<SignInType>("updateSignInUser");
export const signOut = createAction<SignInType>("signOut");

/**
 *  A function to define a reducer as a response between a type of action
 */
const signInReducer = createReducer(signIn, (builder) =>
  builder
    .addCase(signInAuth, (state, action: PayloadAction<SignInType>) => {
      if (action.payload.rememberMe) {
        localStorage.setItem("email", action.payload.email!);
        localStorage.setItem("rememberMe", String(action.payload.rememberMe));
      }
      console.log("return signIn state ", state);
      return {
        ...state,
        isAuth: true,
        token: action.payload.token,
        email: action.payload.email,
        rememberMe: action.payload.rememberMe,
      };
    })
    .addCase(getSignInUser, (state, action: PayloadAction<SignInType>) => {
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      };
    })
    .addCase(updateSignInUser, (state, action: PayloadAction<SignInType>) => {
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      };
    })
    .addCase(signOut, (state) => {
      if (state.rememberMe) {
        return {
          ...state,
          isAuth: false,
          token: undefined,
          firstName: undefined,
          lastName: undefined,
        };
      } else {
        return {
          ...state,
          isAuth: false,
          token: undefined,
          email: undefined,
          firstName: undefined,
          lastName: undefined,
          rememberMe: false,
        };
      }
    })
);

export const selectSignIn = (state: RootState) => state.signIn;
export default signInReducer;
