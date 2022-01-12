import React from "react";
import { Row, Col, List, Button, Space } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";
import EventsListCards from "./EventsListCards";
import EventsListTags from "./EventsListTags";
import style from "./index.module.css";

export default function EventsTagWrapper() {
  return (
    <Row
      justify="space-between"
      className={style.EventsTagWrapper}
      gutter={[24, 0]}
    >
      <Col span={24} sm={24} md={18} lg={18} xl={18} xxl={18}>
        <EventsListCards />
      </Col>
      <Col span={0} sm={0} md={6} lg={6} xl={6} xxl={6}>
        <EventsListTags />
      </Col>
    </Row>
  );
}
