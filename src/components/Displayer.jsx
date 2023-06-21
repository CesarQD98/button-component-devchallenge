import React from "react";

import Button from "./Button";

const Displayer = () => {
  return (
    <div className="button-displayer">
      <div>
        <h3>&lt;Button /&gt;</h3>
        <Button />
      </div>

      <div>
        <h3>&:hover, &:focus</h3>
        <Button />
      </div>
    </div>
  );
};

export default Displayer;
