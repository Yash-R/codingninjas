import React, { useState, useEffect } from "react";
import { List, Avatar, Button, Skeleton } from "antd";

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

export default function EventsListCards() {
  const [state, setState] = useState({
    initLoading: true,
    loading: false,
    data: [],
    list: [],
  });
  useEffect(() => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        setState({
          initLoading: false,
          data: res.results,
          list: res.results,
        });
      });
  }, [setState]);

  const onLoadMore = () => {
    setState({
      loading: true,
      list: state.data.concat(
        [...new Array(count)].map(() => ({
          loading: true,
          name: {},
          picture: {},
        }))
      ),
    });
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        const data = state.data.concat(res.results);
        setState(
          {
            data,
            list: data,
            loading: false,
          },
          () => {
            // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
            // In real scene, you can using public method of react-virtualized:
            // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
            window.dispatchEvent(new Event("resize"));
          }
        );
      });
  };

  const { initLoading, loading, list } = state;
  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px",
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;

  return (
    <List
      className="demo-loadmore-list"
      loading={initLoading}
      itemLayout="horizontal"
      loadMore={loadMore}
      dataSource={list}
      renderItem={(item) => (
        <List.Item>
          <Skeleton title={false} loading={loading}>
            <Button>COntent</Button>
          </Skeleton>
        </List.Item>
      )}
    />
  );
}
