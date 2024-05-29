import { axAuthInstance } from "../../../common/api/axiosConfig";



export async function getMessagesByChatID(chatId) {
    return axAuthInstance.get(`/api/v1/messages/${chatId}`)
}