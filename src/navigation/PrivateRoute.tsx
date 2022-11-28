import React, { Fragment } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectSignIn } from "store/reducers/signInReducer";

/**
 * redirection components for private routes if not authenticated
 */
const PrivateRoute = () => {
  const { isAuth } = useSelector(selectSignIn);
  return (
    <Fragment>{isAuth ? <Outlet /> : <Navigate to="/sign-in" />}</Fragment>
  );
};

export default PrivateRoute;
