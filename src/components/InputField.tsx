import React, { FC } from "react";
import {
  FieldErrors,
  FieldName,
  FieldValues,
  UseFormRegisterReturn,
} from "react-hook-form";

/**
 * type of input field
 */
type InputFieldProps = {
  id: string;
  type: string;
  label: string;
  register: UseFormRegisterReturn<FieldName<FieldValues>>;
  error: FieldErrors;
  defaultValue?: string;
};

/**
 * Generic input fields
 * @param { string } id identify field
 * @param { string } type type field
 * @param { string } label field title
 * @param { string } error listen for errors on the input field
 * @param { string } register Register field into hook form
 * @param { string } defaultValue Default value of field
 */
const InputField: FC<InputFieldProps> = ({
  id,
  type,
  label,
  error,
  register,
  defaultValue,
}: InputFieldProps) => {
  return (
    <div className="inputWrapper">
      <label>{label}</label>
      <input id={id} type={type} {...register} defaultValue={defaultValue} />
      {error[id] && <span>{error[id]?.message as never}</span>}
    </div>
  );
};

InputField.defaultProps = {
  defaultValue: "",
};

export default InputField;
