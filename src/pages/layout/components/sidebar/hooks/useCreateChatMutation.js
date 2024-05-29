import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createChat } from "../api/createChat";

export function useCreateChatMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => createChat(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["chats"] });
    },
  });
}
