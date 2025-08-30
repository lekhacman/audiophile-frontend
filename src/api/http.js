import axios from "axios";
import { prop } from "ramda";

function handleError(err) {
  if (err.response?.status === 401) {
    return window.location.assign("/login");
  }
  if (err.response?.data) {
    throw err.response.data;
  }
  throw err;
}

const http = axios.create({ baseURL: "/api" });
http.interceptors.response.use(prop("data"), handleError);
export default http;
