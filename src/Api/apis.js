import http from "../utils/axios"; // get http by axios

export const getEventsByParams = (category, subcategory, tags, offset, page) =>
  http().get(
    `/events/?event_category=${category && category}&event_sub_category=${
      subcategory && subcategory
    }&tag_list=${tags && tags}&offset=${offset && offset}&page=${page && page}`
  ); // get all events by params

export const getTags = () => http().get("/event_tags"); // get all tags
