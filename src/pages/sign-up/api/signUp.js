import axios from "axios";


const axiosSignUp = axios.create({
  baseURL: "http://localhost:8081/",
});

export async function signUp(data) {
  await axiosSignUp.post("/api/auth/signup", data);
}