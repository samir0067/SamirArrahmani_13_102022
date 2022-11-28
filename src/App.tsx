import React, { FC, Fragment } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import NotFound from "pages/NotFound";
import Home from "pages/Home";
import NavBar from "layout/NavBar";
import PrivateRoute from "navigation/PrivateRoute";
import User from "pages/User";
import SignIn from "pages/SignIn";
import Footer from "layout/Footer";

/**
 * functional component for page navigation and layout elements
 */
const App: FC = () => {
  const location = useLocation();

  return (
    <Fragment>
      <NavBar />
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<User />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;
