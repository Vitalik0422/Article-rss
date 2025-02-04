import axios from 'axios';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  validateStatus: () => {
    return true;
  },
});

export enum URL {
  AUTH = '/auth',
  SIGN_UP = '/auth/register',
  LOGIN = '/auth/login',
  RSS = '/rss',
}
