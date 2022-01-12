import React from "react";
import { Card, Row, Col, Divider, Button } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import style from "./index.module.css";

const { Meta } = Card;

export default function EventCard() {
  return (
    <Card
      style={{
        background: "#fff",
        borderRadius: "5px",
        boxShadow: "0 1px 19px 0 rgb(0 0 0 / 7%)",
        cursor: "pointer",
        fontWeight: "400",
        transition: "all .3s",
      }}
      bodyStyle={{ padding: "20px 16px" }}
      cover={
        <img
          alt="example"
          src="	https://files.codingninjas.in/career-camp-03-14265.jpg"
        />
      }
      actions={[<div>data</div>, <Button>REGISTER NOW</Button>]}
    >
      <Row justify="space-between" gutter={[0, 10]}>
        <Col span={24}>
          <div className={style.event_title}>
            Ninjas Career Camp January 2022
          </div>
        </Col>
        <Col span={10}>
          <div className={style.event_sub_t1}>Starts on</div>
          <div className={style.event_sub_t2}>12:15 AM, 30 Dec 2021</div>
        </Col>
        <Col span={6}>
          <div className={style.event_sub_t1}>Entry Fee</div>
          <div className={style.event_sub_t2}>Free</div>
        </Col>
        <Col span={8}>
          <div className={style.event_sub_t1}>Venue</div>
          <div className={style.event_sub_t2}>CodeZen (Online)</div>
        </Col>
        <Divider style={{ margin: "0px" }} />
        <Col span={24}>
          <div className={style.event_content}>
            Ninjas Career Camp Entrance Test is coming up on 30th December, from
            12 AM onwards
          </div>
        </Col>
      </Row>
    </Card>
  );
}
