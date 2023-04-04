import React from "react";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  otherProps?: any;
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  className,
  ...otherProps
}) => {
  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      {...otherProps}
    >
      {label}
    </button>
  );
};

export default Button;
