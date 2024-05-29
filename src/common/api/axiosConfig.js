import axios from "axios";
import { getCookieByName } from "../utils";
export const axAuthInstance = axios.create({
  baseURL: "http://localhost:8081/",
  headers: {
    Authorization: `Bearer ${JSON.parse(getCookieByName("user")).accessToken}`,
  },
});
