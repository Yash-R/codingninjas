import React from "react";
import { Row, Col, List, Button, Space } from "antd";
import EventCard from "../Cards/EventCard";

export default function EventsListCards() {
  const listData = [];
  for (let i = 0; i < 23; i++) {
    listData.push({
      href: "https://ant.design",
      title: `ant design part ${i}`,
      avatar: "https://joeschmoe.io/api/v1/random",
      description:
        "Ant Design, a design language for background applications, is refined by Ant UED Team.",
      content:
        "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
    });
  }

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );
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
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 8,
        }}
        dataSource={listData}
        renderItem={(item) => (
          <List.Item>
            <EventCard />
          </List.Item>
        )}
      />
    </div>
  );
}
