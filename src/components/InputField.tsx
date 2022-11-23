import React, { FC } from "react";
import {
  FieldErrors,
  FieldName,
  FieldValues,
  UseFormRegisterReturn,
} from "react-hook-form";

type InputFieldProps = {
  id: string;
  type: string;
  label: string;
  register: UseFormRegisterReturn<FieldName<FieldValues>>;
  error: FieldErrors;
  defaultValue?: string;
};

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
