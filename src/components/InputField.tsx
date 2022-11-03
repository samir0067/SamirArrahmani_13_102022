import React, { ChangeEventHandler, FC } from "react";

type InputFieldProps = {
  label: string;
  id: string;
  type: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const InputField: FC<InputFieldProps> = ({
  label,
  id,
  type,
  value,
  onChange,
}: InputFieldProps) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} value={value} onChange={onChange} />
    </div>
  );
};

export default InputField;
