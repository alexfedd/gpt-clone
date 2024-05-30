import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createChat } from "../api/createChat";

export function useCreateChatMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (chatName) => createChat(chatName),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["chats"] });
    },
  });
}
