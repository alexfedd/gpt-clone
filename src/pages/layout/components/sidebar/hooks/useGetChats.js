import { useQuery } from "@tanstack/react-query";
import { getChats } from "../api/getChats";

export function useGetChats() {
    return useQuery({
        queryKey: ['chats'],
        queryFn: async () => {
            return getChats();
        }
    })
}