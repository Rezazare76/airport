import React, { memo } from "react";
import "./hiddenEmail.css";
const HiddenEmail = (props) => {
  return (
    <span class="fas user_icon" onClick={props.onClick}>
      &#xf2bd;
      <span class="user_icon_hidden_text" style={props.hidden_style}>
        programmer1376@gmail.com
      </span>
    </span>
  );
};
export default HiddenEmail;
