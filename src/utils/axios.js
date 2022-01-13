import axios from "axios";
const base_url = "https://api.codingninjas.com/api/v3"; // baseurl

const http = () => {
  return axios.create({
    baseURL: base_url,
    timeout: 0,
    maxRedirects: 5,
  });
};

export default http;
