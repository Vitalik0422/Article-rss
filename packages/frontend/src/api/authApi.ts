import { URL, instance } from '.';
import { LoginResponse, LoginRequest } from '../types/types';

export const authApi = {
  async login(data: LoginRequest): Promise<LoginResponse> {
    return await instance.post(URL.AUTH, data);
  },
};
