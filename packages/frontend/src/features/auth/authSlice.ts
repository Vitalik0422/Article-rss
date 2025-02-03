import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from './loginThunk';
import { signUpUser } from './signUpThunk';

export interface AuthState {
  email: string | null;
  name: string | null;
  token: string | null;
  isLogin: boolean;
  isLoading: boolean;
}

const initialState: AuthState = {
  email: null,
  name: null,
  token: null,
  isLogin: true,
  isLoading: false,
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.email = null;
      state.token = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(signUpUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUpUser.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(signUpUser.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { actions: authActions } = AuthSlice;
export const { reducer: authReducer } = AuthSlice;
