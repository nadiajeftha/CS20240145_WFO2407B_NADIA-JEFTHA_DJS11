import React from "react";

const Button = ({ children, onClick, className }) => {
  return (
    <Button
      onClick={onClick}
      className={`bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none ${className}`}
    >
      {children}
    </Button>
  );
};
export default Button;
