import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from '../features/auth/authSlice';
import { rssReducer } from '../features/rss/rssSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    rss: rssReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
