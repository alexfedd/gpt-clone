import axios from "axios";
import { getCookieByName } from "../../../../../common/utils";


const axGetChats = axios.create({
  baseURL: "http://localhost:8081/",
});

export async function getChats() {
  const userData = JSON.parse(getCookieByName("user"));

  return await axGetChats.get(`/api/v1/${userData.id}/topics`, {
    headers: { Authorization: `${userData.tokenType} ${userData.accessToken}` },
  });
}
