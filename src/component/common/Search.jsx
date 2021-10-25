import React, { memo } from "react";
import "./Search.css";
import Input from "./Input";
import Radio from "./Radio";
import Button from "./Button";
const Search = (props) => {
  return (
    <div class={props.search_container}>
      <div class="click-search" id="click_search_open" dir="rtl">
        <span class="material-icons" onClick={props.openSearch}>
          keyboard_arrow_down جستجو
        </span>
        <div class={props.hidden_class} style={props.hidden_container_style}>
          <Input
            type="text"
            class="form_input right_search_input"
            placeholder="جستجو با نام فارسی/نام انگلیسی و یاتا کد"
          />
          <Input
            type="text"
            class="form_input left_search_input"
            placeholder="نوع"
          />
          <br />
          <Radio class="search-radio" label="فعال" />
          <Radio class="search-radio" label="غیرفعال" />
          <br />
          <div class={props.search_btn_container}>
            <Button value="بازنشانی" class="searchButton right-button" />
            <Button value="جستجو" class="searchButton left-button" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;
