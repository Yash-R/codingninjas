import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import EventsListCards from "./EventsListCards";
import EventsListTags from "./EventsListTags";
import style from "./index.module.css";

import { getEventsByParams } from "../../Api/apis"; // API Call funcion import for vents based on params

export default function EventsTagWrapper({
  getFetchParams,
  setPagenumberAndOrder,
  setTagsToMainState,
}) {
  const [events, setEvents] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    await getEventsByParams(
      getFetchParams.category,
      getFetchParams.sub_category,
      getFetchParams.tags,
      getFetchParams.offset,
      getFetchParams.page
    )
      .then(async (res) => {
        await setEvents(res.data && res.data.data && res.data.data);
      })
      .catch((error) => {
        return error;
      });
  }, [getFetchParams]);

  console.log("events", getFetchParams);
  return (
    <Row
      justify="space-between"
      className={style.EventsTagWrapper}
      gutter={[24, 0]}
    >
      <Col span={24} sm={24} md={18} lg={18} xl={18} xxl={18}>
        <EventsListCards
          events={events}
          setPagenumberAndOrder={setPagenumberAndOrder}
        />
      </Col>
      <Col span={0} sm={0} md={6} lg={6} xl={6} xxl={6}>
        <div>TAGS</div>
        <EventsListTags setTagsToMainState={setTagsToMainState} />
      </Col>
    </Row>
  );
}
