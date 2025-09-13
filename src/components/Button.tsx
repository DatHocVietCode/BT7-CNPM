import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "8px 16px",
        borderRadius: "8px",
        background: "#007bff",
        color: "white",
        border: "none",
        cursor: "pointer"
      }}
    >
      {children}
    </button>
  );
};
