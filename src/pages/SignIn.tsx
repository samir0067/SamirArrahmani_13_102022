import React, { FC } from "react";

const SignIn: FC = () => {
  // const navigate = useNavigate();

  const content = {
    title: "ArgentBank",
  };

  return (
    <section>
      <div className="signIn">
        <h1 className="signIn_title">{content.title}</h1>
        <div></div>
      </div>
    </section>
  );
};

export default SignIn;
