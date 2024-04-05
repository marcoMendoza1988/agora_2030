import React from "react";

interface ButtonProps {
  handleClick?: () => void;
  borderRadius?: string;
  backgroundColor?: string;
  color?: string;
  maxWidth?: string;
  width?: string;
  height?: string; 
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  handleClick,
  borderRadius = "rounded",
  backgroundColor = "bg-blue-500",
  color = "text-white",
  maxWidth = "max-w-xs",
  width = "w-full",
  height= "h-auto",
  children,
  type="button",
  disabled=false
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      className={`px-4 py-2 flex items-center justify-center ${borderRadius} ${backgroundColor} ${color} ${maxWidth} ${width} ${height}`}
    >
      {children}
    </button>
  );
};

export default Button;
