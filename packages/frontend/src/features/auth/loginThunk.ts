import { createAsyncThunk } from '@reduxjs/toolkit';
import { authApi } from '../../api/authApi';
import { LoginRequest, LoginResponse } from '../../types/types';
import axios from 'axios';

export const loginUser = createAsyncThunk<LoginResponse, LoginRequest>(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const response = await authApi.login(data);
      console.log(response.data);

      return response.data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log(err.response?.data);

        return rejectWithValue(err.response?.data);
      }
      return rejectWithValue({ message: 'Unknown error' });
    }
  },
);
