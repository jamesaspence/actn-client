import axios from 'axios';
import { getResponseData, hasToken, withAuth, createApiUrl } from './index';

export const attemptLogin = (email, password) => {
  return axios.post(createApiUrl('/api/login'), {
    email,
    password
  }).then(getResponseData);
};

export const attemptRegister = (email, username, password, passwordConfirmation) => {
  return axios.post(createApiUrl('/api/register'), {
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

  return axios.get(createApiUrl('/api/auth/check'), withAuth()).then(getResponseData);
};

export const postLogout = () => {
  axios.post(createApiUrl('/api/logout'), {}, withAuth())
    //ignore then / catch, we don't care if the postLogout fails on the server side
    //TODO find a safer way to "ignore" this
    .then(() => {})
    .catch(() => {});
};