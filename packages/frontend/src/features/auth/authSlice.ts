import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from './loginThunk';
import { signUpUser } from './signUpThunk';

interface User {
  name: string | null;
  email: string | null;
}

export interface AuthState {
  authData: User;
  token: string | null;
  isLogin: boolean;
  isLoading: boolean;
  errorMessage: string | null;
}

const initialState: AuthState = {
  authData: { name: null, email: null },
  token: null,
  isLogin: true,
  isLoading: false,
  errorMessage: null,
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.authData.email = null;
      state.authData.name = null;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setAuthData: (state) => {},
  },
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.authData = action.payload.authData;
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
