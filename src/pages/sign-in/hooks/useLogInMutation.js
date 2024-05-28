import { useMutation } from "@tanstack/react-query";
import { logIn } from "../api/logIn";
import { useNavigate } from "react-router-dom";

export function useLogInMutation(setError) {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data) => logIn(data),
    onError: (error) => {
        setError("root", {message: 'Неправильный пароль или никнейм'})
    },
    onSuccess: (data) => {
      const expiresDate = new Date();
      expiresDate.setHours(expiresDate.getHours() + 4)
      document.cookie = `user=${JSON.stringify(data.data)};expires=${expiresDate.toUTCString()};`
      navigate('/')
    }
  });
}
