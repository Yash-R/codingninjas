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
  function setSubcategory(key) {
    setGetFetchParams(key);
  } // set subcategory
  return (
    <div>
      <Tabs
        className="events_subcattab"
        size="large"
        activeKey={getFetchParams && getFetchParams.sub_category}
        onChange={setSubcategory}
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
        {getFetchParams && getFetchParams.category !== "CODING_EVENT" ? (
          <TabPane
            tab={<span>All Time Favorites</span>}
            key="All Time Favorites"
          >
            <EventsAndTagWrapper
              events={events}
              getFetchParams={getFetchParams}
              setPagenumberAndOrder={setPagenumberAndOrder}
              setTagsToMainState={setTagsToMainState}
            />
          </TabPane>
        ) : (
          ""
        )}
      </Tabs>
    </div>
  );
}
