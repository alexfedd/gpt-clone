import { useMutation } from "@tanstack/react-query";
import { signUp } from "../api/signUp";
import { useNavigate } from "react-router-dom";

export function useSignUpMutation(setError) {
  const navigate = useNavigate()
  return useMutation({
    mutationFn: (data) => signUp(data),
    onError: (error) => {
      if (error.response.data.message) {
        setError("root", { message: error.response.data.message });
      }
      else {
        setError('root', {message: 'Что-то пошло не так, попробуйте позже'})
      }
    },
    onSuccess:() => {
      navigate('/sign-in')
    }
  });
}
