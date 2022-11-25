import React, { FC } from "react";
import InputField from "components/InputField";
import Button from "components/Button";
import { selectSignIn, updateSignInUser } from "store/reducers/signInReducer";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { profileSchema } from "utils/validation";
import { SignInType } from "utils/types";
import apiFetch from "services/apiFetch";

type FormEditProps = {
  editName: boolean;
  setEditName: (b: boolean) => void;
};

const FormEditName: FC<FormEditProps> = ({ editName, setEditName }) => {
  const dispatch = useDispatch();
  const signIn = useSelector(selectSignIn);

  const handleUpdateSignInUser = async (data: SignInType) => {
    const responseApi = await apiFetch.updateUserProfile({
      firstName: data.firstName,
      lastName: data.lastName,
      token: signIn.token,
    });
    console.log("responseApi updateSignInUser ===", responseApi);
    if (responseApi) {
      dispatch(
        updateSignInUser({
          firstName: data.firstName,
          lastName: data.lastName,
        })
      );
    }
    setEditName(false);
  };

  const handleCancelUser = () => {
    if (editName) {
      setEditName(false);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInType>({
    resolver: yupResolver(profileSchema),
  });

  return (
    <form className="user_header_edit">
      <div className="user_header_edit_wrapper">
        <InputField
          error={errors}
          register={register("firstName")}
          label="Firstname"
          id="firstname"
          type="text"
          defaultValue={signIn.firstName}
        />
        <InputField
          error={errors}
          register={register("lastName")}
          label="Lastname"
          id="lastname"
          type="text"
          defaultValue={signIn.lastName}
        />
      </div>
      <div className="user_header_button">
        <Button
          onClick={handleSubmit(handleUpdateSignInUser)}
          title="Save Name"
        />
        <Button onClick={handleCancelUser} title="Cancel" />
      </div>
    </form>
  );
};

export default FormEditName;
