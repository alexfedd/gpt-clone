import axios from "axios";

const axLogIn = axios.create({
  baseURL: "http://localhost:8081/",
});

export async function logIn(data) {
  console.log("Данные на вход ", data);
  return (await axLogIn.post("/api/auth/signin", data));
}