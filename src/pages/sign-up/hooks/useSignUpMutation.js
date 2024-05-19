import { useMutation } from "@tanstack/react-query";
import { signUp } from "../api/signUp";

export function useSignUpMutation(setError) {
  return useMutation({
    mutationFn: (data) => signUp(data),
    onError: (error) => {
        setError("root", {message: error})
    }
  });
}
