import React, { Fragment } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuth } from "store/reducers/authReducer";

const PrivateRoute = () => {
  const { isAuth } = useSelector(selectAuth);
  return (
    <Fragment>{isAuth ? <Outlet /> : <Navigate to="/sign-in" />}</Fragment>
  );
};

export default PrivateRoute;
