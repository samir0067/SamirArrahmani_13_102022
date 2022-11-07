import React, { Fragment } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import NotFound from "pages/NotFound";
import Home from "pages/Home";
import NavBar from "layout/NavBar";
import PrivateRoute from "navigation/PrivateRoute";
import User from "pages/User";
import SignIn from "pages/SignIn";
import Footer from "layout/Footer";

/**
 * Navigation page with layout element
 */
const App = () => {
  const location = useLocation();

  return (
    <Fragment>
      <NavBar />
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        {/* TODO a fixer*/}
        <Route path="/profile" element={<User />} />
        <Route element={<PrivateRoute />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;
