import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "components/Button";
import { signInAuth } from "store/reducers/signInReducer";
import { FaUserCircle } from "react-icons/fa";
import InputField from "components/InputField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "utils/validation";
import apiCall from "services/apiCall";
import { SignInType } from "utils/types";
import { useNavigate } from "react-router-dom";

/**
 * functional component for the login page
 */
const SignIn: FC = () => {
  document.title = "Argent Bank - Sign in Page";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailStorage = localStorage.getItem("email");
  const rememberStorage = localStorage.getItem("rememberMe");
  const [inputRemember, setInputRemember] = useState<boolean>(
    rememberStorage ? Boolean(rememberStorage) : false
  );

  /**
   * To retrieve data from the API based on the form data
   * @param { SignInType } data
   */
  const handleSignIn = async (data: SignInType) => {
    const responseApi = await apiCall.fetchSignIn({
      email: data.email,
      password: data.password,
    });
    // console.log("responseApi signIn ===", responseApi);
    if (responseApi) {
      dispatch(
        signInAuth({
          token: responseApi,
          email: data.email,
          rememberMe: inputRemember,
        })
      );
      navigate("/profile");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInType>({
    resolver: yupResolver(signInSchema),
  });

  return (
    <main className="bg-dark signIn">
      <section className="signIn_content">
        <FaUserCircle className="signIn_icon" />
        <h1>Sign In</h1>
        <form>
          <InputField
            error={errors}
            register={register("email")}
            label="Email"
            id="email"
            type="text"
            defaultValue={emailStorage ? emailStorage : ""}
          />
          <InputField
            error={errors}
            register={register("password")}
            label="Password"
            id="password"
            type="password"
          />
          <input
            id="remember-me"
            type="checkbox"
            onChange={() => setInputRemember(!inputRemember)}
            checked={inputRemember}
          />
          <label htmlFor="remember-me">{"Remember me"}</label>
          <Button title="Sign In" onClick={handleSubmit(handleSignIn)} />
        </form>
      </section>
    </main>
  );
};

export default SignIn;
