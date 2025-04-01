import React from "react";

import classes from "./button.module.css";

function Button({ children, buttonType }) {
  switch (buttonType) {
    case "primary":
      classes.style = classes.primary;
      break;
    case "secondary":
      classes.style = classes.secondary;
      break;
    default:
      classes.style = classes.primary;
  }

  return (
    <button className={`${classes.button} ${classes.style}`}>
      <span>{children}</span>
    </button>
  );
}

export default Button;
