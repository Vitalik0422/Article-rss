import { RootState } from '../../store/store';

export const selectToken = (state: RootState) => state.auth.token;
export const isLogin = (state: RootState) => state.auth.isLogin;
