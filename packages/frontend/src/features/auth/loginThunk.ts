import { createAsyncThunk } from '@reduxjs/toolkit';
import { authApi } from '../../api/authApi';
import { LoginRequest, LoginResponse } from '../../types/types';

export const loginUser = createAsyncThunk<LoginResponse, LoginRequest>(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const response = await authApi.login(data);

      if (!response.data) {
        throw new Error();
      }
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
