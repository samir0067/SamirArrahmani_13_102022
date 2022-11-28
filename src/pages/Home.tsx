import React, { FC } from "react";
import Hero from "components/Hero";
import Feature from "components/Feature";
import iconChat from "assets/icon-chat.png";
import iconMoney from "assets/icon-money.png";
import iconSecurity from "assets/icon-security.png";

/**
 * functional component for the homepage
 */
const Home: FC = () => {
  document.title = "Argent Bank - Home Page";

  return (
    <main>
      <Hero />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <Feature
          imageSrc={iconChat}
          imageAlt={"Chat Icon"}
          title={"You are our #1 priority"}
          description={
            "Need to talk to a representative? You can get in touch through our\n" +
            " 24/7 chat or through a phone call in less than 5 minutes."
          }
        />
        <Feature
          imageSrc={iconMoney}
          imageAlt={"Money Icon"}
          title={"More savings means higher rates"}
          description={
            "The more you save with us, the higher your interest rate will be!"
          }
        />
        <Feature
          imageSrc={iconSecurity}
          imageAlt={"Security Icon"}
          title={"Security you can trust"}
          description={
            "We use top of the line encryption to make sure your data and money is always safe."
          }
        />
      </section>
    </main>
  );
};

export default Home;
