import React from "react";
import { Row, Col } from "antd";
import style from "./index.module.css";
import EventsCategory from "./EventsCategory";
export default function index() {
  return (
    <div className={style.event_main}>
      <Row
        justify="space-around"
        gutter={[0, 100]}
        className={style.event_main_row}
      >
        <Col span={20} style={{ margin: "auto" }}>
          <div className={style.events_headings}>
            <div className={style.events_heading}>EVENTS & NEWS</div>
            <div className={style.events_subheading}>Learn, Compete & Grow</div>
          </div>
        </Col>
        <Col
          span={24}
          xs={24}
          sm={24}
          md={20}
          lg={20}
          xl={20}
          xxl={20}
          style={{ margin: "auto" }}
        >
          <EventsCategory></EventsCategory>
        </Col>
      </Row>
    </div>
  );
}
