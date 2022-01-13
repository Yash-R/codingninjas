/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  CalendarOutlined,
  LaptopOutlined,
  CodeOutlined,
  FundProjectionScreenOutlined,
  DesktopOutlined,
} from "@ant-design/icons";
import { Tabs } from "antd";

import style from "./index.module.css";
import EventsSubCategory from "./EventsSubCategory";
const { TabPane } = Tabs;

export default function EventsCategory() {
  const [getFetchParams, setGetFetchParams] = useState({
    category: "ALL_EVENTS",
    sub_category: "Upcoming",
    tags: [],
    offset: 0,
    page: 1,
  });

  function callback(key) {
    setGetFetchParams({
      ...getFetchParams,
      category: key,
      sub_category: "Upcoming",
      page: 1,
      offset: 0,
    });
  }

  function setSubcategory(key) {
    setGetFetchParams({
      ...getFetchParams,
      sub_category: key,
      page: 1,
      offset: 0,
    });
  }
  function setPagenumberAndOrder(key) {
    setGetFetchParams({
      ...getFetchParams,
      page: key.page,
      offset: key.offset,
    });
  }
  function setTagsToMainState(key) {
    let data = "";
    key.forEach((element) => {
      data += element.tag + ",";
    });

    setGetFetchParams({
      ...getFetchParams,
      tags: data,
    });
  }
  return (
    <div>
      <Tabs
        className="events_tab"
        size="small"
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
            setPagenumberAndOrder={setPagenumberAndOrder}
            setTagsToMainState={setTagsToMainState}
          />
        </TabPane>
        <TabPane
          tab={
            <span>
              <LaptopOutlined />
              Webinars
            </span>
          }
          key="WEBINAR"
        >
          <EventsSubCategory
            getFetchParams={getFetchParams}
            setGetFetchParams={setSubcategory}
            setPagenumberAndOrder={setPagenumberAndOrder}
            setTagsToMainState={setTagsToMainState}
          />
        </TabPane>
        <TabPane
          tab={
            <span>
              <CodeOutlined />
              Coding Events
            </span>
          }
          key="CODING_EVENT"
        >
          <EventsSubCategory
            getFetchParams={getFetchParams}
            setGetFetchParams={setSubcategory}
            setPagenumberAndOrder={setPagenumberAndOrder}
            setTagsToMainState={setTagsToMainState}
          />
        </TabPane>
        <TabPane
          tab={
            <span>
              <FundProjectionScreenOutlined />
              Bootcamp Events
            </span>
          }
          key="BOOTCAMP_EVENT"
        >
          <EventsSubCategory
            getFetchParams={getFetchParams}
            setGetFetchParams={setSubcategory}
            setPagenumberAndOrder={setPagenumberAndOrder}
            setTagsToMainState={setTagsToMainState}
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
            setPagenumberAndOrder={setPagenumberAndOrder}
            setTagsToMainState={setTagsToMainState}
          />
        </TabPane>
      </Tabs>
    </div>
  );
}
