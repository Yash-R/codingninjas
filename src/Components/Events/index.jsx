import React from "react";
import { Row, Col } from "antd";
import style from "./index.module.css";
import EventsCategory from "./EventsCategory";
export default function index() {
  return (
    <div className={style.event_main}>
      <Row justify="space-around" gutter={[0, 100]}>
        <Col span={20}>
          <div className={style.events_heading}>EVENTS & NEWS</div>
          <div className={style.events_subheading}>Learn, Compete & Grow</div>
        </Col>
        <Col span={20}>
          <EventsCategory></EventsCategory>
        </Col>
      </Row>
    </div>
  );
}
