import axios from 'axios';
import { getResponseData, hasToken, withAuth } from './index';

export const attemptLogin = (email, password) => {
  return axios.post('/api/login', {
    email,
    password
  }).then(getResponseData);
};

export const attemptRegister = (email, username, password, passwordConfirmation) => {
  return axios.post('/api/register', {
    email,
    username,
    password,
    password_confirmation: passwordConfirmation
  }).then(getResponseData);
};

export const checkAuth = () => {
  if (!hasToken()) {
    return Promise.reject('No access token stored');
  }

  return axios.get('/api/auth/check', withAuth()).then(getResponseData);
};