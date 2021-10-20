import React, { memo } from "react";
import "./Dropdown.css";
const Dropdown = (props) => {
  return (
    <select dir="rtl" class={props.class}>
      <option> {props.area1}</option>
      <option value={props.area2}>{props.area2}</option>
      <option value={props.area3}>{props.area3}</option>
    </select>
  );
};
export default Dropdown;
