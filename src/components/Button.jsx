import React from "react";

import "./css/button.css";

const Button = ({ variant = "default", disableShadow = false }) => {
  console.log("variant →", variant);

  let classNameVariant = "button-" + variant;

  disableShadow ? (classNameVariant += " disableShadow") : "";

  console.log("classNameVariant →", classNameVariant);

  return <button className={classNameVariant}>Default</button>;
};

export default Button;
