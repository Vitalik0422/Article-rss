import { createAsyncThunk } from '@reduxjs/toolkit';
import { SignUpRequest, SignUpResponse } from '../../types/types';
import { authApi } from '../../api/authApi';

export const signUpUser = createAsyncThunk<SignUpResponse, SignUpRequest>(
  'auth/signUp',
  async (data, { rejectWithValue }) => {
    try {

      const response = await authApi.signUp(data);

      if (!response.data) {
        throw new Error();
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
