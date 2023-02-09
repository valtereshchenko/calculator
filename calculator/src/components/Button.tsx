import React from "react";
import "./Button.css";

type ButtonProps = {
  children: any;
  handleClick: (val: any) => void;
};

export default function Button({ children, handleClick }: ButtonProps) {
  const isOperator = (val: any) => {
    return !isNaN(val) || val === "." || val === "=";
  };
  return (
    <div
      className={`button-wrapper ${isOperator(children) ? null : "operator"}`}
      onClick={() => handleClick(children)}
    >
      {children}
    </div>
  );
}
