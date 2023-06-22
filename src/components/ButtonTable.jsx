import React from "react";

import ButtonDisplayer from "./ButtonDisplayer";

import Button from "./Button";

const ButtonTable = () => {
  return (
    <>
      <div className="button-table-row">
        <ButtonDisplayer title="<Button />">
          <Button />
        </ButtonDisplayer>
      </div>

      <div className="button-table-row">
        <ButtonDisplayer title='<Button variant="outline"/>'>
          <Button variant="outline" />
        </ButtonDisplayer>
      </div>

      <div className="button-table-row">
        <ButtonDisplayer title='<Button variant="text"/>'>
          <Button variant="text" />
        </ButtonDisplayer>
      </div>

      <div className="button-table-row">
        <ButtonDisplayer title="<Button disableShadow/>">
          <Button variant="text" disableShadow />
        </ButtonDisplayer>
      </div>
    </>
  );
};

export default ButtonTable;
