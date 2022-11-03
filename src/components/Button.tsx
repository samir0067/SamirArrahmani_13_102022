import React, { FC } from "react";

/**
 * Type for Button component
 */
type ButtonProps = {
  title: string;
  onClick: (e: React.MouseEvent) => Promise<void>;
};

/**
 * Generic button used for form validation
 * @param { string } title button title
 * @param { function } onClick to call a function
 */
const Button: FC<ButtonProps> = ({ title, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className="button">
      {title}
    </button>
  );
};

export default Button;
