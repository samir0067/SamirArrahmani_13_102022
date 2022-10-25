import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import NotFound from "pages/NotFound";
import Home from "pages/Home";
import NavBar from "layout/NavBar";

/**
 * Navigation page with layout element
 */
const Routing = () => {
  const location = useLocation();

  return (
    <main>
      <NavBar />
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default Routing;
