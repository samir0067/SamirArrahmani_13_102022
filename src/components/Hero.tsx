import React, { FC } from "react";

/**
 * static component to display information
 */
const Hero: FC = () => {
  return (
    <div className="hero">
      <section className="hero_content">
        <h2 className="sr-only">Promoted Content</h2>
        <p className="hero_content_subtitle">No fees.</p>
        <p className="hero_content_subtitle">No minimum deposit.</p>
        <p className="hero_content_subtitle">High interest rates.</p>
        <p className="hero_content_text">
          Open a savings account with Argent Bank today!
        </p>
      </section>
    </div>
  );
};

export default Hero;
