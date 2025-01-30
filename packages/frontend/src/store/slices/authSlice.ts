import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authApi } from '../../api/authApi';
import { LoginRequest } from '../../types/types';

interface AuthState {
  email: string | null;
  token: string | null;
}

export const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    email: null,
    token: null,
  } as AuthState,
  reducers: {
    login: async (state, action: PayloadAction<LoginRequest>) => {
      const response = await authApi.login(action.payload);
      console.log(response);
      state.email = response.email;
    },

    logout: (state) => {
      state.email = null;
      state.token = null;
    },
  },
});
