import React, { FC, useState } from "react";
import Button from "components/Button";
import { FaUserCircle } from "react-icons/fa";
import InputField from "components/InputField";

const SignIn: FC = () => {
  const [inputEmail, setInputEmail] = useState<string>("");
  const [inputPassword, setInputPassword] = useState<string>("");
  const [inputRemember, setInputRemember] = useState<boolean>(false);

  const handleSignIn = async (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div className="main bg-dark signIn">
      <section className="signIn_content">
        <FaUserCircle className="signIn_icon" />
        <h1>Sign In</h1>
        <form>
          <InputField
            label="Username"
            id="username"
            type="text"
            value={inputEmail}
            onChange={(e) => setInputEmail(e.currentTarget.value)}
          />
          <InputField
            label="Password"
            id="password"
            type="password"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.currentTarget.value)}
          />
          <InputField
            label="Remember me"
            id="remember-me"
            type="checkbox"
            checked={inputRemember}
            onChange={() => setInputRemember(!inputRemember)}
          />
          <Button title="Sign In" onClick={handleSignIn} />
        </form>
      </section>
    </div>
  );
};

export default SignIn;
