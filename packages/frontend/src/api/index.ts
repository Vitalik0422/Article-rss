import axios from 'axios';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  validateStatus(status) {
    console.log(status);
    return status >= 200 && status < 400;
  },
});

export enum URL {
  AUTH = '/auth',
  SIGN_UP = '/auth/register',
  LOGIN = '/auth/login',
  RSS = '/rss',
}
