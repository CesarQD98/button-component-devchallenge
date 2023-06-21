import React from "react";

const Button = ({ variant = "default" }) => {
  console.log("variant →", variant);

  const classNameVariant = "button-" + variant;

  console.log("classNameVariant →", classNameVariant);

  return <button className={classNameVariant}>Default</button>;
};

export default Button;
