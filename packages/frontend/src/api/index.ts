import axios from 'axios';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export enum URL {
  AUTH = '/auth',
  SIGN_UP = '/signUp',
  RSS = '/rss',
}
