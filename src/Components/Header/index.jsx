import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import MenuItems from "./MenuItems"; // all menu items Header
import style from "./index.module.css";

const Header = ({ mockInterviews }) => {
  return (
    <>
      <Row justify="space-around" className={style.header_row}>
        <Col xs={20} sm={20} md={4} lg={3} xl={2} xxl={2}>
          <Link to="/">
            <img
              className={style.header_logo}
              alt="app_logo"
              src="https://files.codingninjas.in/cn-logo-dark-9824.svg"
            />
          </Link>
        </Col>
        <Col xs={4} sm={4} md={20} lg={21} xl={22} xxl={20}>
          <div className={style.header_menu_container}>
            <MenuItems mockInterviews={mockInterviews} />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Header;
