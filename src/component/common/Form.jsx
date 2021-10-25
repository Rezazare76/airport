import React, { memo } from "react";
import "./Form.css";
import Dropdown from "./Dropdown";
import Input from "./Input";
import CheckBox from "./CheckBox";
import Button from "./Button";

const Form = (props) => {
  return (
    <div class={props.FormContainer}>
      <span class="open-menu-btn" onClick={props.OpenNav}>
        &#9776;
      </span>
      <div class="formheader">مدیریت فرودگاه ها</div>
      <div class="display-flex display-column FormMain">
        <div class="form-input-container display-flex">
          <Dropdown
            class="form-dropdown cursor"
            area1="کشور"
            area2="ایران"
            area3="ترکیه"
          />
          <Input
            class="form_input cursor"
            type="text"
            placeholder="نام به فارسی"
          />
          <Input
            class="form_input cursor"
            type="text"
            placeholder="نام به زبان انگلیسی"
          />
        </div>
        <div class="form-input-container display-flex">
          <Dropdown
            class="form-dropdown cursor"
            area1="شهر"
            area2="شیراز"
            area3="تهران"
          />
          <Input class="form_input cursor" type="text" placeholder="یاتاکد" />
          <Input class="form_input cursor" type="text" placeholder="نوع" />
        </div>
      </div>
      <div class="checkbox-container">
        <CheckBox class="form-checkbox cursor" label="فعال" />
      </div>
      <div class="form-btn">
        <Button value="فرم را تکمیل نمایید " class="left-button cursor" />
        <Button value="بازگشت" class="right-button cursor" />
      </div>
    </div>
  );
};
export default Form;
