import React from "react";
import styles from "./Button.module.css";

type Props = {
  children: React.ReactNode | string;
  className?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

function Button({ children, className, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${styles.button} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
