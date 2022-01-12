import React from "react";

import EventsAndTagWrapper from "./EventsAndTagWrapper";

import { Tabs } from "antd";
const { TabPane } = Tabs;

export default function EventsSubCategory({
  getFetchParams,
  setGetFetchParams,
}) {
  function callback(key) {
    setGetFetchParams(key);
  }
  console.log(getFetchParams);
  return (
    <div>
      <Tabs
        className="events_subcattab"
        size="large"
        activeKey={getFetchParams && getFetchParams.sub_category}
        onChange={callback}
      >
        <TabPane tab={<span>Upcoming</span>} key="UPCOMING">
          <EventsAndTagWrapper />
        </TabPane>
        <TabPane tab={<span>Archived</span>} key="ARCHIVED">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab={<span>All Time Favorites</span>} key="All_TIME_FAVORITES">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </div>
  );
}
