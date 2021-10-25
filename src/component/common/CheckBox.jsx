import React, { memo } from "react";
import "./CheckBox.css";
const CheckBox = (props) => {
  return (
    <label class="label">
      <span>{props.label}</span>
      <input class={props.class} type="checkbox" />
    </label>
  );
};
export default CheckBox;
