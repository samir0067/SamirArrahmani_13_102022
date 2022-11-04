import React, { ChangeEventHandler, FC } from "react";

type InputFieldProps = {
  label: string;
  id: string;
  type: string;
  value?: string;
  checked?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const InputField: FC<InputFieldProps> = ({
  label,
  id,
  type,
  value,
  checked,
  onChange,
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
