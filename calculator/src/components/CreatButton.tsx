import React from "react";
import "./CreatButton.css";

export default function ClearButton({ children, handleClear }: any) {
  return (
    <div className="clear-btn" onClick={handleClear}>
      {children}Clear
    </div>
  );
}
