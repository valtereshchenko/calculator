import React from "react";
import "./Input.css";

type InputProps = {
  input: any;
};

export default function Input({ input }: InputProps) {
  return <div className="input">{input}</div>;
}
