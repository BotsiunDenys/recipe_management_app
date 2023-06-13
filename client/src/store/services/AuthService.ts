import api from "../../http";
import { AxiosResponse } from "axios";
import { AuthResponse, UserAuthData } from "../../models/AuthModel";

export default class AuthService {
  static async login({
    username,
    password,
  }: UserAuthData): Promise<AxiosResponse<AuthResponse>> {
    return api.post<AuthResponse>("/auth/login", { username, password });
  }
  static async registration({
    username,
    password,
  }: UserAuthData): Promise<AxiosResponse<AuthResponse>> {
    return api.post<AuthResponse>("/auth/registration", { username, password });
  }
  static async logout(): Promise<void> {
    return api.post("/auth/logout");
  }
}
