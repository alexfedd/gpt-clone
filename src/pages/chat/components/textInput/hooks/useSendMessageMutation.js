import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sendMessage } from "../api/sendMessage";

export function useSendMessageMutation(chatId) {
    const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (message) => sendMessage(message, chatId),
    onError: (error) => {
        console.log(error);
    },
    onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: [chatId, "messages"] });
    }
  });
}
