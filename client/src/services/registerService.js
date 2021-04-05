import http from "./httpService";
import { APIEndPoint } from "../config.json";

export function register(user) {
  return http.post(APIEndPoint + "/users/register", {
    name: user.name,
    email: user.email,
    username: user.username,
    password: user.password,
  });
}
