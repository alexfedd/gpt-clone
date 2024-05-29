import { useQuery } from "@tanstack/react-query";
import { getMessagesByChatID } from "../api/getMessagesByChatID";


export function useGetMessagesByChatID(chatId) {
    return useQuery({
        queryKey: [chatId, 'messages'],
        queryFn: () => getMessagesByChatID(chatId)
    })
}