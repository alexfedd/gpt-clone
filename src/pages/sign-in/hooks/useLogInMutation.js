import { useMutation } from "@tanstack/react-query";
import { logIn } from "../api/logIn";

export function useLogInMutation(setError) {
  return useMutation({
    mutationFn: (data) => logIn(data),
    onError: (error) => {
        setError("root", {message: error})
    }
  });
}
