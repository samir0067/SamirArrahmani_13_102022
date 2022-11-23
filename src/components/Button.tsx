import React, { FC } from "react";

/**
 * Type for Button component
 */
type ButtonProps = {
  title: string;
  style?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

/**
 * Generic button used for form validation
 * @param { string } title button title
 * @param { function } onClick to call a function
 * @param { string } style to add custom style
 * @param { "button" | "submit" | "reset" | undefined } type to define the type of button
 */
const Button: FC<ButtonProps> = ({
  title,
  onClick,
  style,
  type,
}: ButtonProps) => {
  return (
    <button onClick={onClick} type={type} className={`button ${style}`}>
      {title}
    </button>
  );
};

export default Button;
