import axios from "axios";
import { getCookieByName } from "../../../../../common/utils";
import { axAuthInstance } from './../../../../../common/api/axiosConfig';

const axGetChats = axios.create({
  baseURL: "http://localhost:8081/",
});

export async function getChats() {
  const userData = JSON.parse(getCookieByName("user"));

  return await axAuthInstance.get(`/api/v1/${userData.id}/topics`, {
  });
}
