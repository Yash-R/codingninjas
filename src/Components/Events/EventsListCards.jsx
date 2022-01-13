import React from "react";
import { List, Pagination, Skeleton } from "antd";
import EventCard from "../Cards/EventCard";

export default function EventsListCards({ events, setPagenumberAndOrder }) {
  const callback = (key) => {
    setPagenumberAndOrder({
      page: key,
      offset: (key - 1) * 20,
    });
  };

  return (
    <div>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 1,
          md: 1,
          lg: 2,
          xl: 2,
          xxl: 2,
        }}
        itemLayout="horizontal"
        size="large"
        pagination={false}
        dataSource={events.events}
        renderItem={(event) => (
          <Skeleton
            avatar
            paragraph={{ rows: 1 }}
            active
            loading={events === []}
          >
            <List.Item
              style={{
                padding: "0px 0px",
              }}
            >
              <EventCard event={event} />
            </List.Item>
          </Skeleton>
        )}
      />

      <Pagination
        defaultCurrent={1}
        onChange={callback}
        siimple
        style={{ float: "right" }}
        total={events && events.page_count ? events.page_count * 10 : 0}
      ></Pagination>
    </div>
  );
}
