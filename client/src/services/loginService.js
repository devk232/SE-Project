import http from "./httpService";
import { APIEndPoint } from "../config.json";

export function login(email, password) {
  return http.post(APIEndPoint + "/users/login", {
    email: email,
    password: password,
  });
}
