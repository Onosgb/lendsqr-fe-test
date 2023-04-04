import "../../App.scss";

import React, { useState, ChangeEvent } from "react";

interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (name: string, value: string) => void;
  validate?: (value: string) => string | null;
}

const Input: React.FC<InputProps> = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  validate,
}) => {
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    onChange(name, newValue);

    // Call the validate function if provided
    if (validate) {
      const validationError = validate(newValue);
      setError(validationError);
    }
  };

  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      {error && <span style={{ color: "red" }}>{error}</span>}
    </>
  );
};

export default Input;
