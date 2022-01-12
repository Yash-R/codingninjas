import React, { useEffect, useState } from "react";
import {
  CalendarOutlined,
  LaptopOutlined,
  CodeOutlined,
  FundProjectionScreenOutlined,
  DesktopOutlined,
} from "@ant-design/icons";
import { Tabs } from "antd";
import EventsSubCategory from "./EventsSubCategory";
import { getEventsByParams } from "../../Api/apis";
const { TabPane } = Tabs;

export default function EventsCategory() {
  const [getFetchParams, setGetFetchParams] = useState({
    category: "ALL_EVENTS",
    sub_category: "UPCOMING",
    tags: [],
  });
  const [events, setEvents] = useState([]);

  function callback(key) {
    setGetFetchParams({
      ...getFetchParams,
      category: key,
    });
  }

  function setSubcategory(key) {
    setGetFetchParams({
      ...getFetchParams,
      sub_category: key,
    });
  }

  useEffect(() => {
    getEventsByParams().then((res) => {
      console.log("HEllo", res);
    });
  });
  console.log("getFetchParams", getFetchParams);
  return (
    <div>
      <Tabs
        className="events_tab"
        size="large"
        activeKey={getFetchParams && getFetchParams.category}
        onChange={callback}
      >
        <TabPane
          tab={
            <span>
              <CalendarOutlined />
              All Events
            </span>
          }
          key="ALL_EVENTS"
        >
          <EventsSubCategory
            getFetchParams={getFetchParams}
            setGetFetchParams={setSubcategory}
          />
        </TabPane>
        <TabPane
          tab={
            <span>
              <LaptopOutlined />
              Webinars
            </span>
          }
          key="WEBINARS"
        >
          <EventsSubCategory
            getFetchParams={getFetchParams}
            setGetFetchParams={setSubcategory}
          />
        </TabPane>
        <TabPane
          tab={
            <span>
              <CodeOutlined />
              Coding Events
            </span>
          }
          key="CODING_EVENTS"
        >
          <EventsSubCategory
            getFetchParams={getFetchParams}
            setGetFetchParams={setSubcategory}
          />
        </TabPane>
        <TabPane
          tab={
            <span>
              <FundProjectionScreenOutlined />
              Bootcamp Events
            </span>
          }
          key="BOOTCAMP_EVENTS"
        >
          <EventsSubCategory
            getFetchParams={getFetchParams}
            setGetFetchParams={setSubcategory}
          />
        </TabPane>
        <TabPane
          tab={
            <span>
              <DesktopOutlined />
              Workshop
            </span>
          }
          key="WORKSHOP"
        >
          <EventsSubCategory
            getFetchParams={getFetchParams}
            setGetFetchParams={setSubcategory}
          />
        </TabPane>
      </Tabs>
    </div>
  );
}
