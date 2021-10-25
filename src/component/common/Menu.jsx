import React, { memo } from "react";
import "./Menu.css";

const Menu = (props) => {
  let menuList = [
    { name: "داشبورد", classname: "fas fa-tachometer-alt MenuIcon" },
    { name: "اتوماسیون", classname: "fas fa-check-double MenuIcon" },
    { name: "مدیریت کاربران", classname: "fas fa-users-cog MenuIcon" },
    { name: "ارتباطات", classname: "far fa-comments MenuIcon" },
    { name: "اطلاعات پایه", classname: "fas fa-info-circle MenuIcon" },
    { name: "مدیریت اعتبار", classname: "fas fa-money-check-alt MenuIcon" },
    { name: "مدیریت فروش", classname: "fas fa-money-check-alt MenuIcon" },
    { name: "پروفایل", classname: "fas fa-user-tag MenuIcon" },
    { name: "گزارشات", classname: "fas fa-clipboard-list MenuIcon" },
    { name: "مدیرت مالی", classname: "far fa-money-bill-alt MenuIcon" },
    { name: "خروج", classname: "fas fa-sign-out-alt MenuIcon" },
  ];
  return (
    <div class={props.menu_class} style={props.menu_style}>
      <a class={props.close_menu_class} onClick={props.close_menu_onClick}>
        {props.close_menu_value}
      </a>
      {menuList.map((item, itemIndx) => {
        return (
          <div>
            <span class="MenuContent">{item.name}</span>
            <span class={item.classname}></span>
          </div>
        );
      })}
    </div>
  );
};
export default Menu;
