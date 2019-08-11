import React from "react";
import "./Button.css";

const Button = ({ styles, children, variant, ...rest }) => {
  return (
    <button className={variant || "primary"} style={styles} type="button">
      {children}
    </button>
  );
};

export default Button;
