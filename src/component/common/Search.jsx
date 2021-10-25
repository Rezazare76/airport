import React, { memo } from "react";
import "./Search.css";
import Input from "./Input";
import Radio from "./Radio";
import Button from "./Button";
const Search = (props) => {
  return (
    <div class={props.search_container}>
      <div class="hidden_search_content" id="click_search_open" dir="rtl">
        <span class="material-icons cursor" onClick={props.openSearch}>
          {props.search_icon} جستجو
        </span>
        <div class={props.hidden_class} style={props.hidden_container_style}>
          <Input
            type="text"
            class="form_input right_search_input cursor"
            placeholder="جستجو با نام فارسی/نام انگلیسی و یاتا کد"
          />
          <Input
            type="text"
            class="form_input left_search_input cursor"
            placeholder="نوع"
          />
          <br />
          <Radio class="search-radio cursor" label="فعال" name="search_radio" />
          <Radio
            class="search-radio cursor"
            label="غیرفعال"
            name="search_radio"
          />
          <br />
          <div class={props.search_btn_container}>
            <Button value="بازنشانی" class="searchButton right-button cursor" />
            <Button value="جستجو" class="searchButton left-button cursor" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;
