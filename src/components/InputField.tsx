import React, { ChangeEventHandler, FC } from "react";

type InputFieldProps = {
  id: string;
  type: string;
  label: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value?: string;
  checked?: boolean;
};

const InputField: FC<InputFieldProps> = ({
  id,
  type,
  label,
  onChange,
  value,
  checked,
}: InputFieldProps) => {
  return (
    <div className={type === "checkbox" ? "input-remember" : "input-wrapper"}>
      {type !== "checkbox" && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      {type === "checkbox" && <label htmlFor={id}>{label}</label>}
    </div>
  );
};

export default InputField;
