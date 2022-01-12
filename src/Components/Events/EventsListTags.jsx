import React, { useState, useEffect } from "react";
import { List, Avatar, Button, Skeleton } from "antd";
import clsx from "clsx";
import { getTags } from "../../Api/apis";
import style from "./index.module.css";
export default function EventsListCards({ setTagsToMainState }) {
  const count = 10;
  const [tags, setTags] = useState({
    initLoading: true,
    loading: false,
    data: [],
    list: [],
  });
  useEffect(() => {
    getTags().then((res) => {
      let data = [];
      // eslint-disable-next-line array-callback-return
      res.data.data.tags.slice(0, count).map((e) => {
        data.push({
          tag: e,
          isSelected: false,
        });
      });
      setTags({
        initLoading: false,
        data: data,
        list: data,
      });
    });
  }, [setTags]);
  useEffect(() => {
    let data = tags.list.filter((e) => {
      if (e.isSelected) {
        return e;
      }
    });
    setTagsToMainState(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tags, setTags]);

  const onLoadMore = () => {
    setTags({
      loading: true,
      list: tags.data.concat(
        [...new Array(count)].map(() => ({
          loading: true,
        }))
      ),
    });
    getTags().then((res) => {
      const data = tags.data.concat(
        res.data.data.tags.slice(count).map((e) => {
          return {
            tag: e,
            isSelected: false,
          };
        })
      );
      setTags(
        {
          data,
          list: data,
          loading: false,
          initLoading: true,
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

  const { initLoading, loading, list } = tags;
  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          marginTop: 12,
          color: "#fa7328",
          fontWeight: "600",
          fontSize: "14px",
          cursor: "pointer",
          width: "max-content",
        }}
      >
        <p onClick={onLoadMore}>See more tags</p>
      </div>
    ) : null;

  const selectTags = (key) => {
    let data = tags.list.filter((e) => {
      if (e.tag === key) {
        e.isSelected = true;
        return e;
      } else {
        return e;
      }
    });
    setTags({ ...tags, data: data, list: data });
    console.log(data);
  };
  console.log(tags);
  return (
    <List
      column={4}
      grid={{
        gutter: 16,
        span: 2,
      }}
      loading={loading}
      itemLayout="vertical"
      loadMore={loadMore}
      dataSource={list}
      renderItem={(item) => (
        <List.Item style={{ marginBottom: "0px" }}>
          <Skeleton title={false} loading={loading}>
            <button
              className={clsx(
                item.isSelected ? style.selected_tags : "",
                style.tagsButton
              )}
              onClick={() => selectTags(item.tag)}
            >
              {item.tag}
            </button>
          </Skeleton>
        </List.Item>
      )}
    />
  );
}
