import axios from 'axios';
import { getResponseData, hasToken, getToken } from './index';

export const attemptLogin = (email, password) => {
  return axios.post('/api/login', {
    email,
    password
  }).then(getResponseData);
};

export const checkAuth = () => {
  if (!hasToken()) {
    return Promise.reject('No access token stored');
  }

  return axios.get('/api/auth/check', {
    headers: {
      Authorization: `Basic ${getToken()}`
    }
  }).then(getResponseData);
};