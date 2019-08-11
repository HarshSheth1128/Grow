import React from "react";
import "./Button.css";

const Input = ({ styles, type, value, ...rest }) => {
  return <input style={styles} type={type} value={value} />;
};

export default Button;
