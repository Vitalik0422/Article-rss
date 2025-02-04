import { RootState } from '../../store/store';

export const nameUser = (state: RootState) => state.auth.authData.name;
export const emailUser = (state: RootState) => state.auth.authData.email;
