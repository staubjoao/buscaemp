import React, { InputHTMLAttributes } from "react";

import "./styles.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  shouldHide: boolean;
}

const Input: React.FC<InputProps> = ({ label, name, shouldHide, ...rest }) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>
        {label} <span className={shouldHide ? 'hidden' : 'mandatory'}>*</span>{" "}
      </label>
      <input type="text" id={name} {...rest} />
    </div>
  );
};

export default Input;
