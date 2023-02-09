import React from "react";
import "./Button.css";

type ButtonProps = {
  children: any;
};

export default function Button({ children }: ButtonProps) {
  const isOperator = (val: any) => {
    return !isNaN(val) || val === "." || val === "=";
  };
  return (
    <div
      className={`button-wrapper ${isOperator(children) ? null : "operator"}`}
    >
      {children}
    </div>
  );
}
