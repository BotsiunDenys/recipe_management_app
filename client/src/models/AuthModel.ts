interface UserData {
  username: string;
  id: string;
}

export interface UserAuthData {
  username: string;
  password: string;
}

export interface AuthResponse {
  refreshToken: string;
  accessToken: string;
  user: UserData;
}

export interface AccessToken {
  accessToken: string;
}