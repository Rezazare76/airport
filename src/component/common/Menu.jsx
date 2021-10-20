import React, { memo } from "react";
import "./Menu.css";

const Menu = (props) => {
  let menuList = [
    { name: "داشبورد", classname: "fas fa-ruler-combined" },
    { name: "اتوماسیون", classname: "fas fa-check-double" },
    { name: "مدیریت کاربران", classname: "fas fa-users-cog" },
    { name: "ارتباطات", classname: "far fa-comments" },
    { name: "اطلاعات پایه", classname: "fas fa-info-circle" },
    { name: "مدیریت اعتبار", classname: "fas fa-money-check-alt" },
    { name: "مدیریت فروش", classname: "fas fa-money-check-alt" },
    { name: "پروفایل", classname: "fas fa-user-tag" },
    { name: "گزارشات", classname: "fas fa-clipboard-list" },
    { name: "مدیرت مالی", classname: "far fa-money-bill-alt" },
    { name: "خروج", classname: "fas fa-sign-out-alt" },
  ];
  return (
    <div class={props.menu_class} dir={props.menu_dir} style={props.menu_style}>
      <a class={props.close_menu_class} onClick={props.close_menu_onClick}>
        {props.close_menu_value}
      </a>
      {menuList.map((item, itemIndx) => {
        return (
          <div>
            <span class={item.classname}></span>
            {item.name}
          </div>
        );
      })}
    </div>
  );
};
export default Menu;
