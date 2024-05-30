import { axAuthInstance } from "../../../../../common/api/axiosConfig";
import { getCookieByName } from "../../../../../common/utils";

export async function sendMessage(message, chatId) {
  const userId = JSON.parse(getCookieByName("user")).id;
  return await axAuthInstance.post(
    `/api/v1/messages/${userId}/${chatId}`,
    message
  );
}
