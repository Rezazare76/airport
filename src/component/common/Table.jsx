import React, { memo } from "react";
import "./Table.css";
import Pagination from "./Pagination";
const Table = (props) => {
  return (
    <div class={props.ContainerClass}>
      <div class={props.GridClass} id="TableRowColor">
        <div class="grid-header">Id</div>
        <div class="grid-header fas">Name &#xf161;</div>
        <div class="grid-header fas">Last Name &#xf161;</div>
        <div class="grid-header fas">Email &#xf161;</div>

        {props.Table_map}
      </div>
      <Pagination class="pagination" />
    </div>
  );
};
export default Table;
