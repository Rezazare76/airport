import React, { memo } from "react";
import "./Radio.css";
const Radio = (props) => {
  return (
    <label>
      {" "}
      <input class={props.class} type="radio" />
      {props.label}
    </label>
  );
};
export default Radio;
