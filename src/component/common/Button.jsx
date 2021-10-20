import React, { memo } from "react";
import "./Button.css";
const Button = (props) => {
  return (
    <button type={props.type} class={props.class}>
      {props.value}
    </button>
  );
};
export default Button;
