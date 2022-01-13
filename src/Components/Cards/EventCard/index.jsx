/* eslint-disable array-callback-return */
import React from "react";
import Moment from "react-moment";
import { Avatar, Tooltip, Card, Row, Col, Divider, Button } from "antd";

import style from "./index.module.css";

export default function EventCard({ event }) {
  function check(arr) {
    if (arr && arr.length === 0) {
      return false;
    } else {
      return true;
    }
  }
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
        <>
          {event.registration_status === "REGISTRATIONS_OPEN" ? (
            <div className={style.event_card_liveSticker}>
              <div className={style.event_card_liveSticker1}>
                <div className={style.event_card_liveSticker2}></div>
                <p className={style.event_card_liveSticker3}>
                  Registrations <b>open</b> till{" "}
                  <b>
                    <Moment unix format="DD MMM, hh mm A">
                      {event && event.registration_end_time}
                    </Moment>
                  </b>
                </p>
              </div>
            </div>
          ) : (
            ""
          )}
          <img
            style={{
              objectFit: "cover",
              width: "100%",
              height: "159px",
              borderTopLeftRadius: "5px",
              borderTopRightRadius: "5px",
            }}
            alt="example"
            src={event && event.cover_picture}
          />
        </>
      }
      actions={[
        <>
          {event.registration_status !== "REGISTRATIONS_OPEN" &&
          check(event.registered_users.top_users) ? (
            <div>
              <div className={style.event_card_registeruseravatar}>
                {event &&
                  event.registered_users &&
                  event.registered_users.top_users.map((user) => {
                    return (
                      <Tooltip title={user.name} placement="top">
                        <Avatar
                          style={{ float: "left" }}
                          size="small"
                          src={user.image_url}
                        />
                      </Tooltip>
                    );
                  })}
              </div>
              <div className={style.event_card_registeruser}>
                and{" "}
                <b style={{ color: "#000" }}>
                  {event.registered_users.other_users_count}{" "}
                </b>
                others participated
              </div>
            </div>
          ) : (
            ""
          )}
        </>,
        <>
          {event.registration_status === "REGISTRATIONS_OPEN" ? (
            <Button>REGISTER NOW</Button>
          ) : (
            ""
          )}
        </>,
      ]}
    >
      <Row justify="start" gutter={[0, 10]}>
        <Col span={24}>
          <div className={style.event_title}>{event && event.name}</div>
        </Col>

        <Col span={24}>
          <Row
            justify="space-between"
            gutter={[0, 0]}
            style={{ display: "flex" }}
          >
            <Col style={{ flex: 2 }}>
              <div className={style.event_sub_t1}>Starts on</div>

              <div className={style.event_sub_t2}>
                <Moment unix format="hh:mm A, DD MMM YYYY">
                  {event && event.registration_start_time}
                </Moment>
              </div>
            </Col>
            <Col style={{ flex: 1 }}>
              <div className={style.event_sub_t1}>Entry Fee</div>
              <div className={style.event_sub_t2}>
                {event && event.fees === 0 ? "Free" : event.fee}
              </div>
            </Col>
            <Col style={{ flex: 2 }}>
              <div className={style.event_sub_t1}>Venue</div>
              <div className={style.event_sub_t3}>{event && event.venue}</div>
            </Col>
          </Row>
        </Col>

        <Divider style={{ margin: "0px" }} />
        <Col span={24}>
          <div className={style.event_content}>{event && event.short_desc}</div>
          <div className={style.event_content_1}></div>
        </Col>
      </Row>
    </Card>
  );
}
