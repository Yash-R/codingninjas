import React from "react";
import { Row, Col } from "antd";
import style from "./index.module.css";
export default function index() {
  return (
    <Row justify="space-between" gutter={[0, 20]}>
      <Col span={24} sm={24} md={24} lg={5} xl={5} xxl={5}>
        <img
          className={style.footer_logo}
          alt="footer_logo"
          src="	https://files.codingninjas.in/new-logo-03-11984.svg"
        />
        <div className={style.footer_logo_text}>
          Copyright © Sunrise Mentors Pvt. Ltd.
        </div>
      </Col>
      <Col span={24} sm={24} md={24} lg={17} xl={17} xxl={17}>
        <Row justify="space-between" gutter={[0, 10]}>
          <Col span={24} sm={24} md={24} lg={5} xl={5} xxl={5}>
            <div>
              <div className={style.footer_h1}>CODING NINJAS</div>
              <div className={style.footer_h2}>About Us</div>
              <div className={style.footer_h2}>Privacy Policy</div>
              <div className={style.footer_h2}>Terms & Condition</div>
              <div className={style.footer_h2}>Pricing & Refund Policy</div>
              <div className={style.footer_h2}>Bug Bounty</div>
              <div className={style.footer_h2}>Our Students</div>
              <div className={style.footer_h2}>Press Release</div>
            </div>
          </Col>
          <Col span={24} sm={24} md={24} lg={5} xl={5} xxl={5}>
            <div>
              <div className={style.footer_h1}>PRODUCTS</div>
              <div className={style.footer_h2}>Courses</div>
              <div className={style.footer_h2}>Try courses for Free</div>
              <div className={style.footer_h2}>Career Camp</div>
              <div className={style.footer_h2}>Hire Talent</div>
            </div>
          </Col>
          <Col span={24} sm={24} md={24} lg={5} xl={5} xxl={5}>
            <div>
              <div className={style.footer_h1}>COMMUNITY</div>
              <div className={style.footer_h2}>CodeStudio</div>
              <div className={style.footer_h2}>Blog</div>
              <div className={style.footer_h2}>Events</div>
              <div className={style.footer_h2}>Campus Ninja</div>
              <div className={style.footer_h2}>Affiliate</div>
              <div className={style.footer_h2}>Scholarship Event</div>
            </div>
          </Col>
          <Col span={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
            <div>
              <div className={style.footer_h1}>FOLLOW US ON</div>
              <div>
                <img
                  style={{ marginRight: "6px" }}
                  alt="footer_socialmedia"
                  src="	https://files.codingninjas.in/0000000000003240.png"
                />
                <img
                  style={{ marginRight: "6px" }}
                  alt="footer_socialmedia"
                  src="	https://files.codingninjas.in/0000000000003241.png"
                />{" "}
                <img
                  style={{ marginRight: "6px" }}
                  alt="footer_socialmedia"
                  src="	https://files.codingninjas.in/0000000000003245.png"
                />{" "}
                <img
                  style={{ marginRight: "6px" }}
                  alt="footer_socialmedia"
                  src="https://files.codingninjas.in/0000000000003247.png"
                />{" "}
                <img
                  style={{ marginRight: "6px" }}
                  alt="footer_socialmedia"
                  src="https://files.codingninjas.in/0000000000003242.png"
                />
                <img
                  style={{ width: "42px" }}
                  alt="footer_socialmedia"
                  src="	https://files.codingninjas.in/telegram-8247.svg"
                />
              </div>
              <div className={style.footer_h1}>CONTACT US</div>
              <div className={style.footer_h2}>
                <img
                  style={{ marginRight: "17px", width: "18px", height: "18px" }}
                  alt="fotter_contact_logo"
                  src="	https://files.codingninjas.in/0000000000003251.png"
                />
                1800-123-3598
              </div>
              <div className={style.footer_h2}>
                <img
                  style={{ marginRight: "17px", width: "18px", height: "18px" }}
                  alt="fotter_contact_logo"
                  src="	https://files.codingninjas.in/0000000000003250.png"
                />
                contact@codingninjas.com
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
