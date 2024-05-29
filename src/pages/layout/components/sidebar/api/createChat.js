import axios from "axios";
import { getCookieByName } from "../../../../../common/utils";
import { axAuthInstance } from "./../../../../../common/api/axiosConfig";

const axCreateChat = axios.create({
  baseURL: "http://localhost:8081/",
});

export async function createChat() {
  const user = JSON.parse(getCookieByName("user"));
  console.log("EXECUTING");
  await axAuthInstance.post("/api/v1/create/topic", {
    user_id: user.id,
    topicName: "Новый чат",
  });
}
