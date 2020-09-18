import React from "react";

const FontsHeader = ({ children }) => {
  return (
    <header className="text-center bg-danger text-white py-5 mb-5">
      {children}
    </header>
  );
};

export default FontsHeader;
