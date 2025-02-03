export interface LoginResponse {
  email: string;
  token: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}
export interface SignUpRequest {
  email: string;
  password: string;
  name: string;
}
export interface SignUpResponse {
  email: string;
}

export interface RssParamResponse {
  name: string;
  url: string;
}
