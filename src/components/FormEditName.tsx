import React, { FC, useState } from "react";
import InputField from "components/InputField";
import Button from "components/Button";
import { setError } from "store/reducers/errorReducer";
import { ErrorType } from "utils/types";
import { selectUser, setUser } from "store/reducers/userReducer";
import { useDispatch, useSelector } from "react-redux";

type FormEditProps = {
  editName: boolean;
  setEditName: (b: boolean) => void;
};

const FormEditName: FC<FormEditProps> = ({ editName, setEditName }) => {
  const dispatch = useDispatch();
  const { token } = useSelector(selectUser);

  const [inputFirstname, setInputFirstname] = useState<string>("");
  const [inputLastname, setInputLastname] = useState<string>("");

  /**
   * Handle Button Save Name
   */
  const handleSaveUser = () => {
    dispatch(setError({} as ErrorType));
    if (inputFirstname !== "" && inputLastname !== "") {
      dispatch(
        setUser({
          firstName: inputFirstname,
          lastName: inputLastname,
          token,
        })
      );
      setEditName(false);
    }
  };

  // Handle Button Cancel
  const handleCancelUser = () => {
    if (editName) {
      setEditName(false);
      dispatch(setError({} as ErrorType));
    }
  };

  return (
    <form className="user_header_edit">
      <div className="user_header_edit_wrapper">
        <div className="input-wrapper">
          <InputField
            id="firstname"
            type="text"
            label="Firstname"
            value={inputFirstname}
            onChange={(e) => setInputFirstname(e.currentTarget.value)}
          />
        </div>
        <div className="input-wrapper">
          <InputField
            id="lastname"
            type="text"
            label="Lastname"
            value={inputLastname}
            onChange={(e) => setInputLastname(e.currentTarget.value)}
          />
        </div>
      </div>
      <div className="user_header_button">
        <Button onClick={handleSaveUser} title="Save Name" />
        <Button onClick={handleCancelUser} title="Cancel" />
      </div>
    </form>
  );
};

export default FormEditName;
