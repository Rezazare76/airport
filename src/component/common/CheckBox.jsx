import React, { memo } from "react";
import "./CheckBox.css";
const CheckBox = (props) => {
  return (
    <label>
      {props.label}
      <input class={props.class} type="checkbox" />
    </label>
  );
};
export default CheckBox;
