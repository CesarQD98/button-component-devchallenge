import React from "react";

import Button from "./Button";

const Displayer = ({ title }) => {
  return (
    <div className="button-displayer">
      <div>
        <h3>&lt;{title} /&gt;</h3>
        <Button />
      </div>
    </div>
  );
};

export default Displayer;
