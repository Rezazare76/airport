import React, { memo } from "react";
import "./Input.css";
const Input = (props) => {
  return (
    <input
      class={props.class}
      type={props.type}
      id={props.id}
      dir="rtl"
      placeholder={props.placeholder}
    />
  );
};
export default Input;
