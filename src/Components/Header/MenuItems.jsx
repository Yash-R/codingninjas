import React, { useState } from "react";
import { Menu, Button } from "antd";
import style from "./index.module.css";
import clsx from "clsx";
import { MenuOutlined } from "@ant-design/icons";

export default function MenuItems({ mockInterviews }) {
  const [current, setCurrent] = useState({ current: "mail" });

  const handleClick = (e) => {
    setCurrent({ current: e.key });
  };

  return (
    <Menu
      onClick={(e) => handleClick(e)}
      selectedKeys={current}
      mode="horizontal"
      overflowedIndicator={<MenuOutlined />}
      className={style.header_menu}
    >
      <Menu.Item className="header_menu_item" key="Courses">
        <span className={style.header_menuitem_content}>Courses</span>
        <img
          className={style.header_menu_downarrow}
          alt="header_menu_arrow"
          src="	https://files.codingninjas.in/path-9515.svg"
        />
      </Menu.Item>
      <Menu.Item className="header_menu_item" key="Mock Interviews">
        <span className={style.header_menuitem_content}> Mock Interviews</span>
        {mockInterviews &&
        mockInterviews.haveDiscount &&
        mockInterviews.discount ? (
          <div className={style.header_menu_interviewdiscount}>
            {mockInterviews.discount}
          </div>
        ) : (
          ""
        )}
      </Menu.Item>
      <Menu.Item className="header_menu_item" key="Community">
        <span className={style.header_menuitem_content}> Community</span>
        <img
          className={style.header_menu_downarrow}
          alt="header_menu_arrow"
          src="	https://files.codingninjas.in/path-9515.svg"
        />
      </Menu.Item>
      <Menu.Item className="header_menu_item" key="Practice">
        <span className={style.header_menuitem_content}>Practice</span>
        <img
          className={style.header_menu_downarrow}
          alt="header_menu_arrow"
          src="	https://files.codingninjas.in/path-9515.svg"
        />
      </Menu.Item>
      <Menu.Item className="header_menu_item" key="Career Camp">
        <img
          className={style.header_menu_downarrow}
          alt="header_menu_arrow"
          src="https://files.codingninjas.in/careercamp-12614.svg"
        />
        <div className={clsx(style.header_menu_new)}>New</div>
        <span className={style.header_menuitem_content}></span>
        <img
          className={style.header_menu_downarrow}
          alt="header_menu_arrow"
          src="	https://files.codingninjas.in/path-9515.svg"
        />
      </Menu.Item>
      <Menu.Item
        style={{ paddingRight: "0px" }}
        className="header_menu_buttons"
        key="Login"
      >
        <Button size="large" className={style.header_login_button}>
          Login
        </Button>
      </Menu.Item>
      <Menu.Item
        style={{ paddingLeft: "0px" }}
        className="header_menu_buttons"
        key="Enrol Now"
      >
        <Button size="large" className={style.header_enrol_button}>
          Enrol Now
        </Button>
      </Menu.Item>
    </Menu>
  );
}
