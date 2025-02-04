import { createAsyncThunk } from '@reduxjs/toolkit';
import { authApi } from '../../api/authApi';
import { LoginRequest, LoginResponse } from '../../types/types';
import axios from 'axios';

export const loginUser = createAsyncThunk<
  LoginResponse,
  LoginRequest,
  { rejectValue: { message: string; statusCode?: number } }
>('auth/login', async (data, { rejectWithValue }) => {
  try {
    const response = await authApi.login(data);
    console.log(response.data);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return rejectWithValue({
        message: err.response?.data?.message || err.message,
        statusCode: err.response?.status,
      });
    }
    return rejectWithValue({ message: 'Unknown error' });
  }
});
