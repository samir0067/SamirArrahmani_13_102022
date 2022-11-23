import React, { FC } from "react";
import Hero from "components/Hero";
import Features from "components/Features";

const Home: FC = () => {
  document.title = "Argent Bank - Home Page";
  return (
    <main>
      <Hero />
      <Features />
    </main>
  );
};

export default Home;
