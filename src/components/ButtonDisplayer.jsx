import React from "react";

const ButtonDisplayer = ({ title = "", children }) => {
  return (
    <div className="button-displayer">
      <h5>{title}</h5>
      {children}
    </div>
  );
};

export default ButtonDisplayer;
