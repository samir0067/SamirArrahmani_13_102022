import React, { FC } from "react";

/**
 * Type for Button component
 */
type ButtonProps = {
  title: string;
  onClick: (e: React.MouseEvent) => Promise<void>;
  style?: string;
};

/**
 * Generic button used for form validation
 * @param { string } title button title
 * @param { function } onClick to call a function
 * @param { string } style to add custom style
 */
const Button: FC<ButtonProps> = ({ title, onClick, style }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`button ${style}`}>
      {title}
    </button>
  );
};

export default Button;
