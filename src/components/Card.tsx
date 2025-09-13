// filepath: d:\University\Nam4\CNPM_new\Week4\BaiTap7\src\components\Card.tsx
import React from "react";

type CardProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export const Card: React.FC<CardProps> = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        padding: "16px",
        borderRadius: "8px",
        border: "1px solid #eee",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        cursor: onClick ? "pointer" : "default"
      }}
    >
      {children}
    </div>
  );
};