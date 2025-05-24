import React from "react";
import styles from "./FloatingLabelInput.module.css";

type FloatingLabelInputProps = {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

const FloatingLabelInput = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
}: FloatingLabelInputProps) => {
  return (
    <div className={styles.inputWrapper}>
      <label className={styles.label}>
        {label}
        {required && <span className="red">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.inputField}
      />
    </div>
  );
};

export default FloatingLabelInput;
