import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from './authThunk';

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
    logout: (state) => {
      state.email = null;
      state.token = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.email = action.payload.email
      state.token = action.payload.token
    })
  },
});

export const{logout} = AuthSlice.actions
export default AuthSlice.reducer
