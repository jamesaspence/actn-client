import { store } from '../index';

export const getResponseData = res => res.data;

export const getToken = () => {
  const state = store.getState();

  return state.auth.token;
};

export const hasToken = () => {
  const token = getToken();

  return (token != null && typeof token === 'string' && token.length > 0);
};

export const withAuth = () => ({
  headers: {
    Authorization: `Basic ${getToken()}`
  }
});