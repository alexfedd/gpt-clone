import { axAuthInstance } from "../../../../../common/api/axiosConfig";
import { getCookieByName } from "../../../../../common/utils";

export async function sendMessage(message, chatId) {
  const userData = JSON.parse(getCookieByName("user"));
  return await axAuthInstance.post(
    `/api/v1/messages/${userData.id}/${chatId}`,
    {text: message},
    {
      headers: {
        Authorization: `${userData.tokenType} ${userData.accessToken}`,
      },
    }
  );
}
