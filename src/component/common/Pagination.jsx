import React, { memo } from "react";
import "./Pagination.css";
const Pagination = (props) => {
  return (
    <div class={props.class}>
      <a href="#">&laquo;</a>
      <a href="#">&#10092;</a>
      <a href="#">1</a>
      <a href="#">2</a>
      <a href="#">3</a>
      <a href="#">4</a>
      <a href="#">&#10093;</a>
      <a href="#">&raquo;</a>
    </div>
  );
};
export default Pagination;
