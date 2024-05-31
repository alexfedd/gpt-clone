import { axAuthInstance } from "../../../common/api/axiosConfig";
import { getCookieByName } from "../../../common/utils";

export async function getMessagesByChatID(chatId) {
  const userData = JSON.parse(getCookieByName("user"));

  return axAuthInstance.get(`/api/v1/messages/${chatId}`, {
    headers: { Authorization: `${userData.tokenType} ${userData.accessToken}` },
  });
}
