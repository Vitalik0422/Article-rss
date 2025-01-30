export interface LoginResponse {
  email: string;
  token: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}
