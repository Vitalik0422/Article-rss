import { AxiosResponse } from 'axios';
import { URL, instance } from '.';
import { LoginResponse, LoginRequest, SignUpRequest, SignUpResponse } from '../types/types';

export const authApi = {
  async login(data: LoginRequest): Promise<AxiosResponse<LoginResponse>> {
    return await instance.post(URL.AUTH, data);
  },
  async signUp(data: SignUpRequest): Promise<AxiosResponse<SignUpResponse>> {
    return await instance.post(URL.AUTH, data);
  },
};
