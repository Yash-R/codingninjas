import React from "react";

import EventsAndTagWrapper from "./EventsAndTagWrapper";

import { Tabs } from "antd";
const { TabPane } = Tabs;

export default function EventsSubCategory({
  getFetchParams,
  setGetFetchParams,
  events,
  setPagenumberAndOrder,
  setTagsToMainState,
}) {
  function callback(key) {
    setGetFetchParams(key);
  }
  return (
    <div>
      <Tabs
        className="events_subcattab"
        size="large"
        activeKey={getFetchParams && getFetchParams.sub_category}
        onChange={callback}
      >
        <TabPane tab={<span>Upcoming</span>} key="Upcoming">
          <EventsAndTagWrapper
            events={events}
            getFetchParams={getFetchParams}
            setPagenumberAndOrder={setPagenumberAndOrder}
            setTagsToMainState={setTagsToMainState}
          />
        </TabPane>
        <TabPane tab={<span>Archived</span>} key="Archived">
          <EventsAndTagWrapper
            events={events}
            getFetchParams={getFetchParams}
            setPagenumberAndOrder={setPagenumberAndOrder}
            setTagsToMainState={setTagsToMainState}
          />
        </TabPane>
        <TabPane tab={<span>All Time Favorites</span>} key="All Time Favorites">
          <EventsAndTagWrapper
            events={events}
            getFetchParams={getFetchParams}
            setPagenumberAndOrder={setPagenumberAndOrder}
            setTagsToMainState={setTagsToMainState}
          />
        </TabPane>
      </Tabs>
    </div>
  );
}
