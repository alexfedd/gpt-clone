import axios from "axios";
import { getCookieByName } from "../../../../../common/utils";
import { axAuthInstance } from "./../../../../../common/api/axiosConfig";

const axCreateChat = axios.create({
  baseURL: "http://localhost:8081/",
});

export async function createChat(chatName) {
  const userData = JSON.parse(getCookieByName("user"));
  console.log("EXECUTING");
  await axAuthInstance.post(
    "/api/v1/create/topic",
    {
      user_id: userData.id,
      topicName: chatName,
    },
    {
      headers: {
        Authorization: `${userData.tokenType} ${userData.accessToken}`,
      },
    }
  );
}
